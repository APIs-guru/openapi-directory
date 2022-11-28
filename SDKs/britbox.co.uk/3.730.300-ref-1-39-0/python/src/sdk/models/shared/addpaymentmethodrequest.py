from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AddPaymentMethodRequestTypeEnum(str, Enum):
    CARD = "Card"


@dataclass_json
@dataclass
class AddPaymentMethodRequest:
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    type: AddPaymentMethodRequestTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    make_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('makeDefault') }})
    
