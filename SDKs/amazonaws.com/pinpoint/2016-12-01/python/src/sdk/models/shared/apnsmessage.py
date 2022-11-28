from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApnsMessage:
    r"""ApnsMessage
    Specifies the settings for a one-time message that's sent directly to an endpoint through the APNs (Apple Push Notification service) channel.
    """
    
    apns_push_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('APNSPushType') }})
    action: Optional[ActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    badge: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Badge') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    collapse_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollapseId') }})
    data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    media_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaUrl') }})
    preferred_authentication_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PreferredAuthenticationMethod') }})
    priority: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RawContent') }})
    silent_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SilentPush') }})
    sound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sound') }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Substitutions') }})
    thread_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ThreadId') }})
    time_to_live: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeToLive') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Url') }})
    
