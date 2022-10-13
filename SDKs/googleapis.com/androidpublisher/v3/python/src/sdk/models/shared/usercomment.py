from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import devicemetadata
from . import timestamp


@dataclass_json
@dataclass
class UserComment:
    android_os_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'androidOsVersion' }})
    app_version_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appVersionCode' }})
    app_version_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appVersionName' }})
    device: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    device_metadata: Optional[devicemetadata.DeviceMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceMetadata' }})
    last_modified: Optional[timestamp.Timestamp] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified' }})
    original_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originalText' }})
    reviewer_language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reviewerLanguage' }})
    star_rating: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'starRating' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    thumbs_down_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbsDownCount' }})
    thumbs_up_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thumbsUpCount' }})
    
