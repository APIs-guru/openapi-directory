from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItemCondition:
    condition_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionDescription' }})
    condition_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conditionId' }})
    
