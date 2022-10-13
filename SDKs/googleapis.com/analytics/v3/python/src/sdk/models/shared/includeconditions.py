from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IncludeConditions:
    days_to_look_back: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'daysToLookBack' }})
    is_smart_list: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSmartList' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    membership_duration_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipDurationDays' }})
    segment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segment' }})
    
