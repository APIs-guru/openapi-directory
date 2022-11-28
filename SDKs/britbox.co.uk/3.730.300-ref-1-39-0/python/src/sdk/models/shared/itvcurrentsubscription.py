from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItvCurrentSubscription:
    cancel_at_period_end: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancelAtPeriodEnd') }})
    collection_method: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectionMethod') }})
    created: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    current_period_end: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPeriodEnd') }})
    current_period_start: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentPeriodStart') }})
    plan: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('plan') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
