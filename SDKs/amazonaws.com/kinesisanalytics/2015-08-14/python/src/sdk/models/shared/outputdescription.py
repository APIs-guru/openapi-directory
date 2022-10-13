from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import destinationschema
from . import kinesisfirehoseoutputdescription
from . import kinesisstreamsoutputdescription
from . import lambdaoutputdescription


@dataclass_json
@dataclass
class OutputDescription:
    destination_schema: Optional[destinationschema.DestinationSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationSchema' }})
    kinesis_firehose_output_description: Optional[kinesisfirehoseoutputdescription.KinesisFirehoseOutputDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisFirehoseOutputDescription' }})
    kinesis_streams_output_description: Optional[kinesisstreamsoutputdescription.KinesisStreamsOutputDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisStreamsOutputDescription' }})
    lambda_output_description: Optional[lambdaoutputdescription.LambdaOutputDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaOutputDescription' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    output_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputId' }})
    
