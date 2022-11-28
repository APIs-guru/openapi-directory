from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PaymentMethodBrandEnum(str, Enum):
    VISA = "Visa"
    MASTER_CARD = "MasterCard"
    AMERICAN_EXPRESS = "AmericanExpress"
    OTHER = "Other"

class PaymentMethodTypeEnum(str, Enum):
    CARD = "Card"
    WALLET = "Wallet"


@dataclass_json
@dataclass
class PaymentMethod:
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: PaymentMethodTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    brand: Optional[PaymentMethodBrandEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('brand') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    expiry_month: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryMonth') }})
    expiry_year: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiryYear') }})
    last_digits: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastDigits') }})
    
