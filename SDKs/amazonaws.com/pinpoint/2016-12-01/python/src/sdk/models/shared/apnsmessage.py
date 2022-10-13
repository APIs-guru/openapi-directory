from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import action_enum


@dataclass_json
@dataclass
class ApnsMessage:
    apns_push_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'APNSPushType' }})
    action: Optional[action_enum.ActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    badge: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Badge' }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Body' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Category' }})
    collapse_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollapseId' }})
    data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    media_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MediaUrl' }})
    preferred_authentication_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PreferredAuthenticationMethod' }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RawContent' }})
    silent_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SilentPush' }})
    sound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sound' }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Substitutions' }})
    thread_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ThreadId' }})
    time_to_live: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeToLive' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Title' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Url' }})
    
