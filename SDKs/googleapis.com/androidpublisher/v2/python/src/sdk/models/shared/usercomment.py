from dataclasses import dataclass, field
from typing import Optional
from . import *


@dataclass
class UserComment:
    android_os_version: Optional[int] = field(default=None)
    app_version_code: Optional[int] = field(default=None)
    app_version_name: Optional[str] = field(default=None)
    device: Optional[str] = field(default=None)
    device_metadata: Optional[DeviceMetadata] = field(default=None)
    last_modified: Optional[Timestamp] = field(default=None)
    original_text: Optional[str] = field(default=None)
    reviewer_language: Optional[str] = field(default=None)
    star_rating: Optional[int] = field(default=None)
    text: Optional[str] = field(default=None)
    thumbs_down_count: Optional[int] = field(default=None)
    thumbs_up_count: Optional[int] = field(default=None)
    
