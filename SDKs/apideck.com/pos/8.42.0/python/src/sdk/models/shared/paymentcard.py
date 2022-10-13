from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class PaymentCardCardBrandEnum(str, Enum):
    VISA = "visa"
    MASTERCARD = "mastercard"
    AMEX = "amex"
    DISCOVER = "discover"
    DISCOVER_DINERS = "discover-diners"
    JCB = "jcb"
    CHINA_UNIONPAY = "china-unionpay"
    SQUARE_GIFT_CARD = "square-gift-card"
    SQUARE_CAPITAL_CARD = "square-capital-card"
    INTERAC = "interac"
    EFTPOS = "eftpos"
    FELICA = "felica"
    EBT = "ebt"
    OTHER = "other"

class PaymentCardCardTypeEnum(str, Enum):
    CREDIT = "credit"
    DEBIT = "debit"
    PREPAID = "prepaid"
    OTHER = "other"

class PaymentCardPrepaidTypeEnum(str, Enum):
    NON_PREPAID = "non-prepaid"
    PREPAID = "prepaid"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class PaymentCard:
    billing_address: Optional[shared.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_address' }})
    bin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bin' }})
    card_brand: Optional[PaymentCardCardBrandEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_brand' }})
    card_type: Optional[PaymentCardCardTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_type' }})
    cardholder_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cardholder_name' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    exp_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exp_month' }})
    exp_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exp_year' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_4' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant_id' }})
    prepaid_type: Optional[PaymentCardPrepaidTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prepaid_type' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
