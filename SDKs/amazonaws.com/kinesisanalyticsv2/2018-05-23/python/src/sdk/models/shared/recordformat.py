from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RecordFormat:
    r"""RecordFormat
     For a SQL-based Kinesis Data Analytics application, describes the record format and relevant mapping information that should be applied to schematize the records on the stream. 
    """
    
    record_format_type: RecordFormatTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordFormatType') }})
    mapping_parameters: Optional[MappingParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MappingParameters') }})
    
