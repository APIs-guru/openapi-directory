from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProfileUpdateRequest:
    hero_autoplay: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heroAutoplay') }})
    hero_with_audio: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heroWithAudio') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pin_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinEnabled') }})
    purchase_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('purchaseEnabled') }})
    segments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    
