from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import action_enum


@dataclass_json
@dataclass
class Message:
    action: Optional[action_enum.ActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    image_icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageIconUrl' }})
    image_small_icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageSmallIconUrl' }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageUrl' }})
    json_body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JsonBody' }})
    media_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaUrl' }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RawContent' }})
    silent_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SilentPush' }})
    time_to_live: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeToLive' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    
