from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VoidedPurchase:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    purchase_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseTimeMillis' }})
    purchase_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purchaseToken' }})
    voided_reason: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voidedReason' }})
    voided_source: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voidedSource' }})
    voided_time_millis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voidedTimeMillis' }})
    
