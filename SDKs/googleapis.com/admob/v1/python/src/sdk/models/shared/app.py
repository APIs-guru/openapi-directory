from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class App:
    r"""App
    Describes an AdMob app for a specific platform (For example: Android or iOS).
    """
    
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appId') }})
    linked_app_info: Optional[AppLinkedAppInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkedAppInfo') }})
    manual_app_info: Optional[AppManualAppInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manualAppInfo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    
