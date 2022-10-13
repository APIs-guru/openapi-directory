from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateTagOptionInput:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Active' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
