from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstancePolicyOrTemplate:
    r"""InstancePolicyOrTemplate
    Either an InstancePolicy or an instance template.
    """
    
    install_gpu_drivers: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installGpuDrivers') }})
    instance_template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceTemplate') }})
    policy: Optional[InstancePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    
