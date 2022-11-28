from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DiskMap:
    r"""DiskMap
    Describes a block storage disk mapping.
    """
    
    new_disk_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newDiskName') }})
    original_disk_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originalDiskPath') }})
    
