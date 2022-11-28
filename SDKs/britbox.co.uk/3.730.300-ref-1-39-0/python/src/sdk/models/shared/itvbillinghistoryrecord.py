from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItvBillingHistoryRecord:
    card: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('card') }})
    charge: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('charge') }})
    invoice: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice') }})
    subscription: dict[str, Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    
