from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DiskMap:
    new_disk_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newDiskName' }})
    original_disk_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalDiskPath' }})
    
