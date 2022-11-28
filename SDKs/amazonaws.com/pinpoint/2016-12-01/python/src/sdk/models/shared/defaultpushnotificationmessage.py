from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DefaultPushNotificationMessage:
    r"""DefaultPushNotificationMessage
    Specifies the default settings and content for a push notification that's sent directly to an endpoint.
    """
    
    action: Optional[ActionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Action') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Body') }})
    data: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    silent_push: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SilentPush') }})
    substitutions: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Substitutions') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Url') }})
    
