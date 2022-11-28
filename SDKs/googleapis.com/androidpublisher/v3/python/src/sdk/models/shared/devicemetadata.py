from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeviceMetadata:
    r"""DeviceMetadata
    Characteristics of the user's device.
    """
    
    cpu_make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuMake') }})
    cpu_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpuModel') }})
    device_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceClass') }})
    gl_es_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glEsVersion') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    native_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nativePlatform') }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productName') }})
    ram_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ramMb') }})
    screen_density_dpi: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenDensityDpi') }})
    screen_height_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenHeightPx') }})
    screen_width_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenWidthPx') }})
    
