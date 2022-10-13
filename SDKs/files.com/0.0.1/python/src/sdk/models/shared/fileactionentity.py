from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FileActionEntity:
    file_migration_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file_migration_id' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
