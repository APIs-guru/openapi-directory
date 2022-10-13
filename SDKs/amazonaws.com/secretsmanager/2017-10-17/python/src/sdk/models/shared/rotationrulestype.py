from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RotationRulesType:
    automatically_after_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutomaticallyAfterDays' }})
    
