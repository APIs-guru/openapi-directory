from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResolveCustomerResult:
    customer_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CustomerIdentifier' }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProductCode' }})
    
