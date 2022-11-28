from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Disk:
    r"""Disk
    A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. https://cloud.google.com/compute/docs/disks#pdspecs. https://cloud.google.com/compute/docs/disks#localssds.
    """
    
    disk_interface: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskInterface') }})
    image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('image') }})
    size_gb: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeGb') }})
    snapshot: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapshot') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
