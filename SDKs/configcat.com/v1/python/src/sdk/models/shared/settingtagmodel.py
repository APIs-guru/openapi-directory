from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SettingTagModel:
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    setting_tag_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('settingTagId') }})
    tag_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagId') }})
    
