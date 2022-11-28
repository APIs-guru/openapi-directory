from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OutputDescription:
    r"""OutputDescription
    For a SQL-based Kinesis Data Analytics application, describes the application output configuration, which includes the in-application stream name and the destination where the stream data is written. The destination can be a Kinesis data stream or a Kinesis Data Firehose delivery stream. 
    """
    
    destination_schema: Optional[DestinationSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationSchema') }})
    kinesis_firehose_output_description: Optional[KinesisFirehoseOutputDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseOutputDescription') }})
    kinesis_streams_output_description: Optional[KinesisStreamsOutputDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamsOutputDescription') }})
    lambda_output_description: Optional[LambdaOutputDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaOutputDescription') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    output_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputId') }})
    
