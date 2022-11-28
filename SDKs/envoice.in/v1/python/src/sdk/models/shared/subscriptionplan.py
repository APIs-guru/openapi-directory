from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SubscriptionPlanFeaturesEnum(str, Enum):
    API = "Api"
    TEAMS = "Teams"
    CLIENTS = "Clients"
    SHOP = "Shop"
    PAYMENT_LINKS = "PaymentLinks"
    CNAME = "Cname"

class SubscriptionPlanRecurrenceEnum(str, Enum):
    MONTHLY = "Monthly"
    YEARLY = "Yearly"

class SubscriptionPlanStatusEnum(str, Enum):
    ACTIVE_TRIAL = "ActiveTrial"
    EXPIRED_TRIAL = "ExpiredTrial"
    ACTIVE = "Active"
    CANCELED = "Canceled"
    FRAUDLENT = "Fraudlent"

class SubscriptionPlanSystemCancelationReasonEnum(str, Enum):
    FAIL_TO_CAPTURE_FEE = "FailToCaptureFee"
    FRAUD = "Fraud"


@dataclass_json
@dataclass
class SubscriptionPlan:
    cancellated_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CancellatedOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    coupon_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CouponCode') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CurrencyCode') }})
    external_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalIdentifier') }})
    features: Optional[List[SubscriptionPlanFeaturesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Features') }})
    has_due_payment: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasDuePayment') }})
    has_due_payment_since: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasDuePaymentSince'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Identifier') }})
    is_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsActive') }})
    is_lifetime: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsLifetime') }})
    last_payment_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastPaymentOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_clients: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxClients') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    on_hold: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnHold') }})
    order_identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderIdentifier') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Price') }})
    recurrence: Optional[SubscriptionPlanRecurrenceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Recurrence') }})
    sale_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SaleId') }})
    status: Optional[SubscriptionPlanStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    system_cancelation_reason: Optional[SubscriptionPlanSystemCancelationReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SystemCancelationReason') }})
    trial_ends_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrialEndsOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    trial_number_of_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrialNumberOfDays') }})
    trial_starts_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TrialStartsOn'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Version') }})
    
