from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ProfileUpdateRequest:
    hero_autoplay: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heroAutoplay' }})
    hero_with_audio: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'heroWithAudio' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pin_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pinEnabled' }})
    purchase_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseEnabled' }})
    segments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    
