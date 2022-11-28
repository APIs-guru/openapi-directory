from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Variant:
    r"""Variant
    APK that is suitable for inclusion in a system image. The resource of SystemApksService.
    """
    
    device_spec: Optional[DeviceSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSpec') }})
    variant_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('variantId') }})
    

@dataclass_json
@dataclass
class VariantInput:
    r"""VariantInput
    APK that is suitable for inclusion in a system image. The resource of SystemApksService.
    """
    
    device_spec: Optional[DeviceSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceSpec') }})
    
