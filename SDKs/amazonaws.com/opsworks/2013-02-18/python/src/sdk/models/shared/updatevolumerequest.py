from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateVolumeRequest:
    mount_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MountPoint' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    volume_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeId' }})
    
