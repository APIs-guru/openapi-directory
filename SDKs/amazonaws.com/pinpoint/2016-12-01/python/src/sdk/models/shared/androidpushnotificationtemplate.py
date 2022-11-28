from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AndroidPushNotificationTemplate:
    r"""AndroidPushNotificationTemplate
    Specifies channel-specific content and settings for a message template that can be used in push notifications that are sent through the ADM (Amazon Device Messaging), Baidu (Baidu Cloud Push), or GCM (Firebase Cloud Messaging, formerly Google Cloud Messaging) channel.
    """
    
    action: Optional[ActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    image_icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageIconUrl') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageUrl') }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RawContent') }})
    small_image_icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmallImageIconUrl') }})
    sound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sound') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Url') }})
    
