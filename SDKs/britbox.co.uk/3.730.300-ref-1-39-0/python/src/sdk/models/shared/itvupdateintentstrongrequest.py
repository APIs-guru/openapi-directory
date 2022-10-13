from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ItvUpdateIntentStrongRequest:
    payment_method_from_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMethodFromToken' }})
    payment_method_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMethodId' }})
    profile_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileToken' }})
    
