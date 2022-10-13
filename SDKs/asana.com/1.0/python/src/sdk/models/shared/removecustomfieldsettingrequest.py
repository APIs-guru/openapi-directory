from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RemoveCustomFieldSettingRequest:
    custom_field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_field' }})
    
