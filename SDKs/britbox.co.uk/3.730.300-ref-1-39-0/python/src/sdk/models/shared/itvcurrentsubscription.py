from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvCurrentSubscription:
    cancel_at_period_end: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancelAtPeriodEnd' }})
    collection_method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectionMethod' }})
    created: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    current_period_end: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPeriodEnd' }})
    current_period_start: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentPeriodStart' }})
    plan: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
