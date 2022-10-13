from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import targetplatformaccelerator_enum
from . import targetplatformarch_enum
from . import targetplatformos_enum


@dataclass_json
@dataclass
class TargetPlatform:
    accelerator: Optional[targetplatformaccelerator_enum.TargetPlatformAcceleratorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Accelerator' }})
    arch: targetplatformarch_enum.TargetPlatformArchEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arch' }})
    os: targetplatformos_enum.TargetPlatformOsEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Os' }})
    
