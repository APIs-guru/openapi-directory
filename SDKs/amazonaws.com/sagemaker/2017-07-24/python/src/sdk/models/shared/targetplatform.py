from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TargetPlatform:
    r"""TargetPlatform
    Contains information about a target platform that you want your model to run on, such as OS, architecture, and accelerators. It is an alternative of <code>TargetDevice</code>.
    """
    
    arch: TargetPlatformArchEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arch') }})
    os: TargetPlatformOsEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Os') }})
    accelerator: Optional[TargetPlatformAcceleratorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Accelerator') }})
    
