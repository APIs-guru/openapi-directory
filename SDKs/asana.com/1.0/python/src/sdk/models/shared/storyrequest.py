from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
class StoryRequest:
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    html_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_text' }})
    is_pinned: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_pinned' }})
    resource_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_subtype' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource_type' }})
    sticker_name: Optional[StoryRequestStickerNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sticker_name' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    
