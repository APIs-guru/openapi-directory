from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import returnaddress


@dataclass_json
@dataclass
class AcceptPaymentDisputeRequest:
    return_address: Optional[returnaddress.ReturnAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnAddress' }})
    revision: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'revision' }})
    
