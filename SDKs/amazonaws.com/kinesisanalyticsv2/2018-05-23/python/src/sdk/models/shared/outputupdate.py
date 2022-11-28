from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OutputUpdate:
    r"""OutputUpdate
     For a SQL-based Kinesis Data Analytics application, describes updates to the output configuration identified by the <code>OutputId</code>. 
    """
    
    output_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutputId') }})
    destination_schema_update: Optional[DestinationSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationSchemaUpdate') }})
    kinesis_firehose_output_update: Optional[KinesisFirehoseOutputUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseOutputUpdate') }})
    kinesis_streams_output_update: Optional[KinesisStreamsOutputUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamsOutputUpdate') }})
    lambda_output_update: Optional[LambdaOutputUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaOutputUpdate') }})
    name_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NameUpdate') }})
    
