from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    delivery_type: MediaFileDeliveryTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryType') }})
    drm: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('drm') }})
    format: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    height: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    language: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resolution: MediaFileResolutionEnum1 = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    channels: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channels') }})
    
