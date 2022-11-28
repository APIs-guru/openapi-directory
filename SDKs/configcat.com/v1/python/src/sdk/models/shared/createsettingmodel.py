from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateSettingModel:
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    setting_type: SettingTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingType') }})
    hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hint') }})
    tags: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
