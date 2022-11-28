from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VolumeConfiguration:
    r"""VolumeConfiguration
    Describes an Amazon EBS volume configuration.
    """
    
    mount_point: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MountPoint') }})
    number_of_disks: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NumberOfDisks') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Size') }})
    encrypted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Encrypted') }})
    iops: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Iops') }})
    raid_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RaidLevel') }})
    volume_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VolumeType') }})
    
