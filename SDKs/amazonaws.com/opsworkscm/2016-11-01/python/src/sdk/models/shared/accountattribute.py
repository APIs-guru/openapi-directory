from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountAttribute:
    maximum: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Maximum' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Used' }})
    
