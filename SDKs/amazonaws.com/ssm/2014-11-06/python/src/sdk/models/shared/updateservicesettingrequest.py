from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateServiceSettingRequest:
    setting_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SettingId' }})
    setting_value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SettingValue' }})
    
