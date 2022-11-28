from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class StoryRequestStickerNameEnum(str, Enum):
    GREEN_CHECKMARK = "green_checkmark"
    PEOPLE_DANCING = "people_dancing"
    DANCING_UNICORN = "dancing_unicorn"
    HEART = "heart"
    PARTY_POPPER = "party_popper"
    PEOPLE_WAVING_FLAGS = "people_waving_flags"
    SPLASHING_NARWHAL = "splashing_narwhal"
    TROPHY = "trophy"
    YETI_RIDING_UNICORN = "yeti_riding_unicorn"
    CELEBRATING_PEOPLE = "celebrating_people"
    DETERMINED_CLIMBERS = "determined_climbers"
    PHOENIX_SPREADING_LOVE = "phoenix_spreading_love"


@dataclass_json
@dataclass
class StoryRequestInput:
    html_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_text') }})
    is_pinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_pinned') }})
    sticker_name: Optional[StoryRequestStickerNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sticker_name') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
