from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FileshareUsage:
    available_space: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_space' }})
    total_space: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_space' }})
    used_space: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used_space' }})
    used_space_percentage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'used_space_percentage' }})
    
