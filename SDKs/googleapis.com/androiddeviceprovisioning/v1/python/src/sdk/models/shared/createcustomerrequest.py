from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import company


@dataclass_json
@dataclass
class CreateCustomerRequest:
    customer: Optional[company.Company] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    
