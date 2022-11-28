from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProfileSummary:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isActive') }})
    marketing_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('marketingEnabled') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pin_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinEnabled') }})
    purchase_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseEnabled') }})
    segments: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    hero_autoplay: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heroAutoplay') }})
    hero_with_audio: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heroWithAudio') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    max_rating_content_filter: Optional[ClassificationSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRatingContentFilter') }})
    min_rating_playback_guard: Optional[ClassificationSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minRatingPlaybackGuard') }})
    
