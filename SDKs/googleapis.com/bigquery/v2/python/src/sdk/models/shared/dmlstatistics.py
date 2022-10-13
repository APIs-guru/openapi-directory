from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DmlStatistics:
    deleted_row_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedRowCount' }})
    inserted_row_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insertedRowCount' }})
    updated_row_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedRowCount' }})
    
