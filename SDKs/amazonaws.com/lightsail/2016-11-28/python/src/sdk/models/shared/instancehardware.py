from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceHardware:
    r"""InstanceHardware
    Describes the hardware for the instance.
    """
    
    cpu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuCount') }})
    disks: Optional[List[Disk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disks') }})
    ram_size_in_gb: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ramSizeInGb') }})
    
