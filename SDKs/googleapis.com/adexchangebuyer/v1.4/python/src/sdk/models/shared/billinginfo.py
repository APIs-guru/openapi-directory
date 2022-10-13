from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BillingInfo:
    account_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    account_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountName' }})
    billing_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingId' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
