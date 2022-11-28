from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApnsPushNotificationTemplate:
    r"""ApnsPushNotificationTemplate
    Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the APNs (Apple Push Notification service) channel.
    """
    
    action: Optional[ActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    media_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MediaUrl') }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RawContent') }})
    sound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sound') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Url') }})
    
