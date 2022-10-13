from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AddPaymentMethodRequestTypeEnum(str, Enum):
    CARD = "Card"


@dataclass_json
@dataclass
class AddPaymentMethodRequest:
    make_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'makeDefault' }})
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    type: AddPaymentMethodRequestTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
