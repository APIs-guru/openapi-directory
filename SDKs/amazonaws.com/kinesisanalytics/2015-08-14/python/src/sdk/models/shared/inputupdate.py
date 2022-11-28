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
class InputUpdate:
    r"""InputUpdate
    Describes updates to a specific input configuration (identified by the <code>InputId</code> of an application). 
    """
    
    input_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputId') }})
    input_parallelism_update: Optional[InputParallelismUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputParallelismUpdate') }})
    input_processing_configuration_update: Optional[InputProcessingConfigurationUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputProcessingConfigurationUpdate') }})
    input_schema_update: Optional[InputSchemaUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputSchemaUpdate') }})
    kinesis_firehose_input_update: Optional[KinesisFirehoseInputUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseInputUpdate') }})
    kinesis_streams_input_update: Optional[KinesisStreamsInputUpdate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamsInputUpdate') }})
    name_prefix_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamePrefixUpdate') }})
    
