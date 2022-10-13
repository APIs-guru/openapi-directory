from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Cell:
    cell_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cellReference' }})
    column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column' }})
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnName' }})
    row: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row' }})
    
