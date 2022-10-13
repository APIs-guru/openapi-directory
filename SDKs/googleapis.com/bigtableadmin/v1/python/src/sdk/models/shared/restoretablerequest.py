from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RestoreTableRequest:
    backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backup' }})
    table_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableId' }})
    
