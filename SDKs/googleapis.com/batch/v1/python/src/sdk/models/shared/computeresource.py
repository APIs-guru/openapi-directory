from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ComputeResource:
    r"""ComputeResource
    Compute resource requirements
    """
    
    boot_disk_mib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskMib') }})
    cpu_milli: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuMilli') }})
    memory_mib: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memoryMib') }})
    
