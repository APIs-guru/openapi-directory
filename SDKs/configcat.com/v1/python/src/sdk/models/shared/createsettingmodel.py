from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import settingtype_enum


@dataclass_json
@dataclass
class CreateSettingModel:
    hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hint' }})
    key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    setting_type: settingtype_enum.SettingTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'settingType' }})
    tags: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
