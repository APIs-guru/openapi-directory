from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import classificationsummary
from . import classificationsummary


@dataclass_json
@dataclass
class ProfileSummary:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    hero_autoplay: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heroAutoplay' }})
    hero_with_audio: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heroWithAudio' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isActive' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    marketing_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marketingEnabled' }})
    max_rating_content_filter: Optional[classificationsummary.ClassificationSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRatingContentFilter' }})
    min_rating_playback_guard: Optional[classificationsummary.ClassificationSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minRatingPlaybackGuard' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pin_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pinEnabled' }})
    purchase_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseEnabled' }})
    segments: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    
