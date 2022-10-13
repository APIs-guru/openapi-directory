from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MediaFileDeliveryTypeEnum(str, Enum):
    STREAM = "Stream"
    PROGRESSIVE = "Progressive"
    DOWNLOAD = "Download"

class MediaFileResolutionEnum1(str, Enum):
    SD = "SD"
    HD_720 = "HD-720"
    HD_1080 = "HD-1080"
    HD_4_K = "HD-4K"
    EXTERNAL = "External"
    UNKNOWN = "Unknown"


@dataclass_json
@dataclass
class MediaFile:
    channels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channels' }})
    delivery_type: MediaFileDeliveryTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryType' }})
    drm: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drm' }})
    format: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    height: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    language: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resolution: MediaFileResolutionEnum1 = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    width: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
