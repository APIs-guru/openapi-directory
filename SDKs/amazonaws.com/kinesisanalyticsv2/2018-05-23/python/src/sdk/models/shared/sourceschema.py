from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recordcolumn
from . import recordformat


@dataclass_json
@dataclass
class SourceSchema:
    record_columns: List[recordcolumn.RecordColumn] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordColumns' }})
    record_encoding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordEncoding' }})
    record_format: recordformat.RecordFormat = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordFormat' }})
    
