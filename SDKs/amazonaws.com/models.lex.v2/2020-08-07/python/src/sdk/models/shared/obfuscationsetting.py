from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import obfuscationsettingtype_enum


@dataclass_json
@dataclass
class ObfuscationSetting:
    obfuscation_setting_type: obfuscationsettingtype_enum.ObfuscationSettingTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfuscationSettingType' }})
    
