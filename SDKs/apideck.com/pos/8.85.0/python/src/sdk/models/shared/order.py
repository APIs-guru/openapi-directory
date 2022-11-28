from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderDiscountsInput:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    scope: Optional[OrderDiscountsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    type: Optional[OrderDiscountsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class OrderFulfillmentsPickupDetailsInput:
    auto_complete_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_complete_duration') }})
    cancel_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_reason') }})
    canceled_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canceled_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    curbside_pickup_details: Optional[OrderFulfillmentsPickupDetailsCurbsidePickupDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('curbside_pickup_details') }})
    expired_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expired_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expires_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_curbside_pickup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_curbside_pickup') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    picked_up_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('picked_up_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pickup_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickup_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pickup_window_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickup_window_duration') }})
    placed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    prep_time_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prep_time_duration') }})
    ready_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ready_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recipient: Optional[OrderFulfillmentsPickupDetailsRecipient] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    rejected_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejected_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schedule_type: Optional[OrderFulfillmentsPickupDetailsScheduleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_type') }})
    

@dataclass_json
@dataclass
class OrderFulfillmentsInput:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pickup_details: Optional[OrderFulfillmentsPickupDetailsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickup_details') }})
    shipment_details: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipment_details') }})
    status: Optional[OrderFulfillmentsFulfillmentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[OrderFulfillmentsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class OrderLineItemsInput:
    applied_discounts: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_discounts') }})
    applied_taxes: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_taxes') }})
    item: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    modifiers: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiers') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    total_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_amount') }})
    total_discount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_discount') }})
    total_tax: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tax') }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_price') }})
    

@dataclass_json
@dataclass
class OrderPaymentsInput:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    

@dataclass_json
@dataclass
class OrderRefundsInput:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: Optional[OrderRefundsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class OrderTendersInput:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    buyer_tendered_cash_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer_tendered_cash_amount') }})
    card: Optional[PaymentCardInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card') }})
    card_entry_method: Optional[OrderTendersCardEntryMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_entry_method') }})
    card_status: Optional[OrderTendersCardStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_status') }})
    change_back_cash_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('change_back_cash_amount') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    total_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_amount') }})
    total_discount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_discount') }})
    total_processing_fee: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_processing_fee') }})
    total_refund: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_refund') }})
    total_service_charge: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_service_charge') }})
    total_tax: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tax') }})
    total_tip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tip') }})
    type: Optional[OrderTendersTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class OrderCustomers:
    emails: Optional[List[Email]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_name') }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('middle_name') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_numbers') }})
    
class OrderDiscountsScopeEnum(str, Enum):
    ORDER = "order"
    LINE_ITEM = "line_item"

class OrderDiscountsTypeEnum(str, Enum):
    PERCENTAGE = "percentage"
    FLAT_FEE = "flat_fee"


@dataclass_json
@dataclass
class OrderDiscounts:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_id') }})
    scope: Optional[OrderDiscountsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scope') }})
    type: Optional[OrderDiscountsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class OrderFulfillmentsPickupDetailsCurbsidePickupDetails:
    r"""OrderFulfillmentsPickupDetailsCurbsidePickupDetails
    Specific details for curbside pickup.
    """
    
    buyer_arrived_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer_arrived_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    curbside_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('curbside_details') }})
    

@dataclass_json
@dataclass
class OrderFulfillmentsPickupDetailsRecipient:
    address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_name') }})
    email: Optional[Email] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    phone_number: Optional[PhoneNumber] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phone_number') }})
    
class OrderFulfillmentsPickupDetailsScheduleTypeEnum(str, Enum):
    SCHEDULED = "scheduled"


@dataclass_json
@dataclass
class OrderFulfillmentsPickupDetails:
    accepted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accepted_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    auto_complete_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auto_complete_duration') }})
    cancel_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cancel_reason') }})
    canceled_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canceled_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    curbside_pickup_details: Optional[OrderFulfillmentsPickupDetailsCurbsidePickupDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('curbside_pickup_details') }})
    expired_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expired_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expires_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expires_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_curbside_pickup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_curbside_pickup') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    picked_up_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('picked_up_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pickup_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickup_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pickup_window_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickup_window_duration') }})
    placed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    prep_time_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prep_time_duration') }})
    ready_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ready_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recipient: Optional[OrderFulfillmentsPickupDetailsRecipient] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient') }})
    rejected_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rejected_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schedule_type: Optional[OrderFulfillmentsPickupDetailsScheduleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule_type') }})
    
class OrderFulfillmentsFulfillmentStatusEnum(str, Enum):
    PROPOSED = "proposed"
    RESERVED = "reserved"
    PREPARED = "prepared"
    COMPLETED = "completed"
    CANCELLED = "cancelled"
    FAILED = "failed"
    OTHER = "other"

class OrderFulfillmentsTypeEnum(str, Enum):
    PICKUP = "pickup"
    SHIPMENT = "shipment"


@dataclass_json
@dataclass
class OrderFulfillments:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pickup_details: Optional[OrderFulfillmentsPickupDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickup_details') }})
    shipment_details: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipment_details') }})
    status: Optional[OrderFulfillmentsFulfillmentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    type: Optional[OrderFulfillmentsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class OrderLineItems:
    applied_discounts: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_discounts') }})
    applied_taxes: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applied_taxes') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    item: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    modifiers: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modifiers') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quantity') }})
    total_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_amount') }})
    total_discount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_discount') }})
    total_tax: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tax') }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unit_price') }})
    
class OrderPosPaymentStatusEnum(str, Enum):
    OPEN = "open"
    PAID = "paid"
    REFUNDED = "refunded"
    CREDITED = "credited"
    PARTIALLY_PAID = "partially_paid"
    PARTIALLY_REFUNDED = "partially_refunded"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class OrderPayments:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    
class OrderRefundsStatusEnum(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    FAILED = "failed"


@dataclass_json
@dataclass
class OrderRefunds:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    status: Optional[OrderRefundsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tender_id') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_id') }})
    
class OrderSourceEnum(str, Enum):
    IN_STORE = "in-store"
    ONLINE = "online"
    OPT = "opt"
    API = "api"
    KIOSK = "kiosk"
    CALLER_ID = "caller-id"
    GOOGLE = "google"
    INVOICE = "invoice"

class OrderStatusEnum(str, Enum):
    OPEN = "open"
    DRAFT = "draft"
    DELIVERED = "delivered"
    DELAYED = "delayed"
    VOIDED = "voided"
    COMPLETED = "completed"
    HIDDEN = "hidden"

class OrderTendersCardEntryMethodEnum(str, Enum):
    EVM = "evm"
    SWIPED = "swiped"
    KEYED = "keyed"
    ON_FILE = "on-file"
    CONTACTLESS = "contactless"

class OrderTendersCardStatusEnum(str, Enum):
    AUTHORIZED = "authorized"
    CAPTURED = "captured"
    FAILED = "failed"
    VOIDED = "voided"

class OrderTendersTypeEnum(str, Enum):
    CASH = "cash"
    CARD = "card"
    OTHER = "other"


@dataclass_json
@dataclass
class OrderTenders:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    buyer_tendered_cash_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyer_tendered_cash_amount') }})
    card: Optional[PaymentCard] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card') }})
    card_entry_method: Optional[OrderTendersCardEntryMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_entry_method') }})
    card_status: Optional[OrderTendersCardStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('card_status') }})
    change_back_cash_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('change_back_cash_amount') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_id') }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percentage') }})
    total_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_amount') }})
    total_discount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_discount') }})
    total_processing_fee: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_processing_fee') }})
    total_refund: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_refund') }})
    total_service_charge: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_service_charge') }})
    total_tax: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tax') }})
    total_tip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tip') }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transaction_id') }})
    type: Optional[OrderTendersTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class OrderInput:
    location_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    merchant_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant_id') }})
    closed_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    customers: Optional[List[OrderCustomers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customers') }})
    discounts: Optional[List[OrderDiscountsInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discounts') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_id') }})
    fulfillments: Optional[List[OrderFulfillmentsInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillments') }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key') }})
    line_items: Optional[List[OrderLineItemsInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_items') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    order_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_number') }})
    order_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_type_id') }})
    payment_status: Optional[OrderPosPaymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_status') }})
    payments: Optional[List[OrderPaymentsInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference_id') }})
    refunded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refunded') }})
    refunds: Optional[List[OrderRefundsInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refunds') }})
    seat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seat') }})
    service_charges: Optional[List[ServiceChargeInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_charges') }})
    status: Optional[OrderStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    taxes: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes') }})
    tenders: Optional[List[OrderTendersInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenders') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    total_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_amount') }})
    total_discount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_discount') }})
    total_refund: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_refund') }})
    total_service_charge: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_service_charge') }})
    total_tax: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tax') }})
    total_tip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tip') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    voided: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voided') }})
    

@dataclass_json
@dataclass
class Order:
    location_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    merchant_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchant_id') }})
    closed_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    currency: Optional[CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer_id') }})
    customers: Optional[List[OrderCustomers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customers') }})
    discounts: Optional[List[OrderDiscounts]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discounts') }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('employee_id') }})
    fulfillments: Optional[List[OrderFulfillments]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fulfillments') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('idempotency_key') }})
    line_items: Optional[List[OrderLineItems]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('line_items') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    order_date: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_date'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_number') }})
    order_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_type_id') }})
    payment_status: Optional[OrderPosPaymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_status') }})
    payments: Optional[List[OrderPayments]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payments') }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference_id') }})
    refunded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refunded') }})
    refunds: Optional[List[OrderRefunds]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refunds') }})
    seat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seat') }})
    service_charges: Optional[List[ServiceCharge]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_charges') }})
    source: Optional[OrderSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    status: Optional[OrderStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('table') }})
    taxes: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes') }})
    tenders: Optional[List[OrderTenders]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tenders') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    total_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_amount') }})
    total_discount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_discount') }})
    total_refund: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_refund') }})
    total_service_charge: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_service_charge') }})
    total_tax: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tax') }})
    total_tip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_tip') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    voided: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voided') }})
    voided_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voided_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
