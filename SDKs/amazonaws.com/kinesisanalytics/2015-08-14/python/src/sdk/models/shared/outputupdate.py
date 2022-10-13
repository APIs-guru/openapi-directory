from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import destinationschema
from . import kinesisfirehoseoutputupdate
from . import kinesisstreamsoutputupdate
from . import lambdaoutputupdate


@dataclass_json
@dataclass
class OutputUpdate:
    destination_schema_update: Optional[destinationschema.DestinationSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationSchemaUpdate' }})
    kinesis_firehose_output_update: Optional[kinesisfirehoseoutputupdate.KinesisFirehoseOutputUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisFirehoseOutputUpdate' }})
    kinesis_streams_output_update: Optional[kinesisstreamsoutputupdate.KinesisStreamsOutputUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisStreamsOutputUpdate' }})
    lambda_output_update: Optional[lambdaoutputupdate.LambdaOutputUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LambdaOutputUpdate' }})
    name_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NameUpdate' }})
    output_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputId' }})
    
