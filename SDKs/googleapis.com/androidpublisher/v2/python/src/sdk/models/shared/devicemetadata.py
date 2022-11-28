from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeviceMetadata:
    cpu_make: Optional[str] = field(default=None)
    cpu_model: Optional[str] = field(default=None)
    device_class: Optional[str] = field(default=None)
    gl_es_version: Optional[int] = field(default=None)
    manufacturer: Optional[str] = field(default=None)
    native_platform: Optional[str] = field(default=None)
    product_name: Optional[str] = field(default=None)
    ram_mb: Optional[int] = field(default=None)
    screen_density_dpi: Optional[int] = field(default=None)
    screen_height_px: Optional[int] = field(default=None)
    screen_width_px: Optional[int] = field(default=None)
    
