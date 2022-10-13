from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PaymentDisputeActivity:
    activity_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityDate' }})
    activity_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityType' }})
    actor: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actor' }})
    
