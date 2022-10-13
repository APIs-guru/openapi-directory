from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import recordcolumn
from . import recordformat


@dataclass_json
@dataclass
class InputSchemaUpdate:
    record_column_updates: Optional[List[recordcolumn.RecordColumn]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordColumnUpdates' }})
    record_encoding_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordEncodingUpdate' }})
    record_format_update: Optional[recordformat.RecordFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RecordFormatUpdate' }})
    
