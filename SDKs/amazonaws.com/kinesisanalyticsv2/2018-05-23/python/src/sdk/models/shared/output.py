from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import destinationschema
from . import kinesisfirehoseoutput
from . import kinesisstreamsoutput
from . import lambdaoutput


@dataclass_json
@dataclass
class Output:
    destination_schema: destinationschema.DestinationSchema = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationSchema' }})
    kinesis_firehose_output: Optional[kinesisfirehoseoutput.KinesisFirehoseOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisFirehoseOutput' }})
    kinesis_streams_output: Optional[kinesisstreamsoutput.KinesisStreamsOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisStreamsOutput' }})
    lambda_output: Optional[lambdaoutput.LambdaOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaOutput' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    
