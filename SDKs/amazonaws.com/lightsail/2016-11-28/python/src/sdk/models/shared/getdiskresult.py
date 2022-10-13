from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import disk


@dataclass_json
@dataclass
class GetDiskResult:
    disk: Optional[disk.Disk] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    
