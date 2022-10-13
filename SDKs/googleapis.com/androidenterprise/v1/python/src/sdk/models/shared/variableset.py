from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VariableSet:
    placeholder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeholder' }})
    user_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userValue' }})
    
