from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""ContentAdsSettings
    Settings specific to content ads (AFC).
    """
    
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    type: Optional[ContentAdsSettingsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
