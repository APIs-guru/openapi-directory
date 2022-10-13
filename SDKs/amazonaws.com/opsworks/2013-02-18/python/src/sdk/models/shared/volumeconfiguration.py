from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VolumeConfiguration:
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Encrypted' }})
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Iops' }})
    mount_point: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MountPoint' }})
    number_of_disks: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfDisks' }})
    raid_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RaidLevel' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    volume_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeType' }})
    
