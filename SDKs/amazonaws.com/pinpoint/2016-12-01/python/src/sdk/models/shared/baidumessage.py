from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BaiduMessage:
    r"""BaiduMessage
    Specifies the settings for a one-time message that's sent directly to an endpoint through the Baidu (Baidu Cloud Push) channel.
    """
    
    action: Optional[ActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    icon_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IconReference') }})
    image_icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageIconUrl') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageUrl') }})
    raw_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RawContent') }})
    silent_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SilentPush') }})
    small_image_icon_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SmallImageIconUrl') }})
    sound: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sound') }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Substitutions') }})
    time_to_live: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeToLive') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Url') }})
    
