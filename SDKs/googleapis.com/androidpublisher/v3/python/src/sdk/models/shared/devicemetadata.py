from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceMetadata:
    cpu_make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuMake' }})
    cpu_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuModel' }})
    device_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceClass' }})
    gl_es_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glEsVersion' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    native_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nativePlatform' }})
    product_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productName' }})
    ram_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ramMb' }})
    screen_density_dpi: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenDensityDpi' }})
    screen_height_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenHeightPx' }})
    screen_width_px: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenWidthPx' }})
    
