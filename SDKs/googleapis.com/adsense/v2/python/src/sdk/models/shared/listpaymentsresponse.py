from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import payment


@dataclass_json
@dataclass
class ListPaymentsResponse:
    payments: Optional[List[payment.Payment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payments' }})
    
