from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ActionsBillingUsageMinutesUsedBreakdown:
    macos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MACOS' }})
    ubuntu: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UBUNTU' }})
    windows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WINDOWS' }})
    

@dataclass_json
@dataclass
class ActionsBillingUsage:
    included_minutes: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'included_minutes' }})
    minutes_used_breakdown: ActionsBillingUsageMinutesUsedBreakdown = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minutes_used_breakdown' }})
    total_minutes_used: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_minutes_used' }})
    total_paid_minutes_used: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_paid_minutes_used' }})
    
