from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UsageInstruction:
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
