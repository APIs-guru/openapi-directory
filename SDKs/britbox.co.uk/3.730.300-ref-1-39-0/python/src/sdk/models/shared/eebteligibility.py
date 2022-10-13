from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EeBtEligibility:
    eligible: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eligible' }})
    plan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
