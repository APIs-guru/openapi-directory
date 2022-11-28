from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SourceSchema:
    r"""SourceSchema
    For a SQL-based Kinesis Data Analytics application, describes the format of the data in the streaming source, and how each data element maps to corresponding columns created in the in-application stream. 
    """
    
    record_columns: List[RecordColumn] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordColumns') }})
    record_format: RecordFormat = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordFormat') }})
    record_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecordEncoding') }})
    
