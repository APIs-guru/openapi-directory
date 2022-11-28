from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AttachedDisk:
    r"""AttachedDisk
    A new or an existing persistent disk (PD) or a local ssd attached to a VM instance.
    """
    
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceName') }})
    existing_disk: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('existingDisk') }})
    new_disk: Optional[Disk] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newDisk') }})
    
