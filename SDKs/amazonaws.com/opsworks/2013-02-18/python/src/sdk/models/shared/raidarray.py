from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RaidArray:
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedAt' }})
    device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Device' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Iops' }})
    mount_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MountPoint' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    number_of_disks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NumberOfDisks' }})
    raid_array_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RaidArrayId' }})
    raid_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RaidLevel' }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    volume_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VolumeType' }})
    
