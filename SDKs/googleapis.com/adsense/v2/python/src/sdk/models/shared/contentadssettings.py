from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ContentAdsSettingsTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    DISPLAY = "DISPLAY"
    FEED = "FEED"
    ARTICLE = "ARTICLE"
    MATCHED_CONTENT = "MATCHED_CONTENT"
    LINK = "LINK"


@dataclass_json
@dataclass
class ContentAdsSettings:
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: Optional[ContentAdsSettingsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
