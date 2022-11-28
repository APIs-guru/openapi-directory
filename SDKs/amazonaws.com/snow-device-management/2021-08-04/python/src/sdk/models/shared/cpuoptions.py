from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CPUOptions:
    r"""CPUOptions
    The options for how a device's CPU is configured.
    """
    
    core_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coreCount') }})
    threads_per_core: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('threadsPerCore') }})
    
