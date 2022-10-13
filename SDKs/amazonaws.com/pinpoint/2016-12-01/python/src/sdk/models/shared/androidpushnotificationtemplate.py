from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import action_enum


@dataclass_json
@dataclass
class AndroidPushNotificationTemplate:
    action: Optional[action_enum.ActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    image_icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageIconUrl' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageUrl' }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RawContent' }})
    small_image_icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SmallImageIconUrl' }})
    sound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sound' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    
