from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AddCustomFieldSettingRequest:
    custom_field: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_field' }})
    insert_after: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insert_after' }})
    insert_before: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insert_before' }})
    is_important: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_important' }})
    
