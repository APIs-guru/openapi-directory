from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import activitytype


@dataclass_json
@dataclass
class DeprecateActivityTypeInput:
    activity_type: activitytype.ActivityType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityType' }})
    domain: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    
