from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PaymentTypeEnum(str, Enum):
    OTHER = "Other"
    PAYPAL = "Paypal"
    STRIPE = "Stripe"
    PAYONEER = "Payoneer"
    BANK = "Bank"
    CASH = "Cash"
    CHEQUE = "Cheque"
    ACH = "Ach"
    SEPA = "Sepa"
    SQUARE = "Square"
    KLIK_AND_PAY = "KlikAndPay"
    RAZORPAY = "Razorpay"
    WEPAY = "Wepay"
    HALKBANK = "Halkbank"
    TWO_CHECKOUT = "TwoCheckout"
    PAYMENT_WALL = "PaymentWall"
    BAMBORA_EU = "BamboraEU"
    BAMBORA_NA = "BamboraNA"
    NLB = "Nlb"
    AUTHORIZE_NET = "AuthorizeNet"
    BRAINTREE = "Braintree"


@dataclass_json
@dataclass
class Payment:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Amount') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    invoice: Optional[Invoice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Invoice') }})
    invoice_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InvoiceId') }})
    is_automatic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAutomatic') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Note') }})
    paid_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaidOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReferenceId') }})
    type: Optional[PaymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
