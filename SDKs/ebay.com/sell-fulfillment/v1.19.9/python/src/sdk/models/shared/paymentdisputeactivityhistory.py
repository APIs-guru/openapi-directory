from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import paymentdisputeactivity


@dataclass_json
@dataclass
class PaymentDisputeActivityHistory:
    activity: Optional[List[paymentdisputeactivity.PaymentDisputeActivity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activity' }})
    
