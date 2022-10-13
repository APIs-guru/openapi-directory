from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import targetingvalue
from . import targetingvalue


@dataclass_json
@dataclass
class TargetingCriteria:
    exclusions: Optional[List[targetingvalue.TargetingValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusions' }})
    inclusions: Optional[List[targetingvalue.TargetingValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inclusions' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    
