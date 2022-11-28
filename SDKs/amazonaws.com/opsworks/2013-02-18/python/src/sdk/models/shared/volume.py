from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Volume:
    r"""Volume
    Describes an instance's Amazon EBS volume.
    """
    
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Device') }})
    ec2_volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ec2VolumeId') }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encrypted') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Iops') }})
    mount_point: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountPoint') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    raid_array_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RaidArrayId') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Region') }})
    size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    volume_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeId') }})
    volume_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeType') }})
    
