from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Accelerator:
    r"""Accelerator
    Accelerator describes Compute Engine accelerators to be attached to the VM.
    """
    
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    install_gpu_drivers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installGpuDrivers') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
