from dataclasses import dataclass, field
from typing import Any
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvBillingHistoryRecord:
    card: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card' }})
    charge: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charge' }})
    invoice: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice' }})
    subscription: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    
