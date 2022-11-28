from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DestinationSchema:
    r"""DestinationSchema
    Describes the data format when records are written to the destination in a SQL-based Kinesis Data Analytics application. 
    """
    
    record_format_type: RecordFormatTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordFormatType') }})
    
