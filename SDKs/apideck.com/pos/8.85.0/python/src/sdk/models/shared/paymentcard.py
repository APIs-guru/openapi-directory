from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""PaymentCard
    A card's non-confidential details.
    """
    
    billing_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_address') }})
    bin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bin') }})
    card_brand: Optional[PaymentCardCardBrandEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_brand') }})
    card_type: Optional[PaymentCardCardTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_type') }})
    cardholder_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardholder_name') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    exp_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exp_month') }})
    exp_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exp_year') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_4') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant_id') }})
    prepaid_type: Optional[PaymentCardPrepaidTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prepaid_type') }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference_id') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    

@dataclass_json
@dataclass
class PaymentCardInput:
    r"""PaymentCardInput
    A card's non-confidential details.
    """
    
    billing_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billing_address') }})
    bin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bin') }})
    card_brand: Optional[PaymentCardCardBrandEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_brand') }})
    card_type: Optional[PaymentCardCardTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_type') }})
    cardholder_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cardholder_name') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enabled') }})
    exp_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exp_month') }})
    exp_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exp_year') }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fingerprint') }})
    last_4: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_4') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant_id') }})
    prepaid_type: Optional[PaymentCardPrepaidTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prepaid_type') }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference_id') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
