from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    brand: Optional[PaymentMethodBrandEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'brand' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    expiry_month: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryMonth' }})
    expiry_year: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiryYear' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_digits: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastDigits' }})
    type: PaymentMethodTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
