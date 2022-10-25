from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import currency_enum
from . import email
from . import phonenumber
from . import currency_enum
from . import address
from . import email
from . import phonenumber
from . import currency_enum
from . import currency_enum
from . import servicecharge
from . import paymentcard
from . import currency_enum


@dataclass_json
@dataclass
class OrderCustomers:
    emails: Optional[List[email.Email]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    middle_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'middle_name' }})
    phone_numbers: Optional[List[phonenumber.PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_numbers' }})
    
class OrderDiscountsScopeEnum(str, Enum):
    ORDER = "order"
    LINE_ITEM = "line_item"

class OrderDiscountsTypeEnum(str, Enum):
    PERCENTAGE = "percentage"
    FLAT_FEE = "flat_fee"


@dataclass_json
@dataclass
class OrderDiscounts:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: Optional[currency_enum.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_id' }})
    scope: Optional[OrderDiscountsScopeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scope' }})
    type: Optional[OrderDiscountsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class OrderFulfillmentsPickupDetailsCurbsidePickupDetails:
    buyer_arrived_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer_arrived_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    curbside_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'curbside_details' }})
    

@dataclass_json
@dataclass
class OrderFulfillmentsPickupDetailsRecipient:
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    email: Optional[email.Email] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    phone_number: Optional[phonenumber.PhoneNumber] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone_number' }})
    
class OrderFulfillmentsPickupDetailsScheduleTypeEnum(str, Enum):
    SCHEDULED = "scheduled"


@dataclass_json
@dataclass
class OrderFulfillmentsPickupDetails:
    accepted_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accepted_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    auto_complete_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auto_complete_duration' }})
    cancel_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancel_reason' }})
    canceled_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canceled_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    curbside_pickup_details: Optional[OrderFulfillmentsPickupDetailsCurbsidePickupDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'curbside_pickup_details' }})
    expired_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expired_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expires_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expires_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_curbside_pickup: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_curbside_pickup' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    picked_up_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'picked_up_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pickup_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickup_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    pickup_window_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickup_window_duration' }})
    placed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placed_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    prep_time_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'prep_time_duration' }})
    ready_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ready_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    recipient: Optional[OrderFulfillmentsPickupDetailsRecipient] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient' }})
    rejected_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rejected_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    schedule_type: Optional[OrderFulfillmentsPickupDetailsScheduleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule_type' }})
    
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
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    pickup_details: Optional[OrderFulfillmentsPickupDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickup_details' }})
    shipment_details: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipment_details' }})
    status: Optional[OrderFulfillmentsFulfillmentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[OrderFulfillmentsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class OrderLineItems:
    applied_discounts: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_discounts' }})
    applied_taxes: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applied_taxes' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    item: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    modifiers: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modifiers' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    quantity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    total_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_amount' }})
    total_discount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_discount' }})
    total_tax: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tax' }})
    unit_price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit_price' }})
    
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
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: Optional[currency_enum.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class OrderRefundsStatusEnum(str, Enum):
    PENDING = "pending"
    APPROVED = "approved"
    REJECTED = "rejected"
    FAILED = "failed"


@dataclass_json
@dataclass
class OrderRefunds:
    amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    currency: Optional[currency_enum.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    status: Optional[OrderRefundsStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tender_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tender_id' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_id' }})
    
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
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    buyer_tendered_cash_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyer_tendered_cash_amount' }})
    card: Optional[paymentcard.PaymentCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card' }})
    card_entry_method: Optional[OrderTendersCardEntryMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_entry_method' }})
    card_status: Optional[OrderTendersCardStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_status' }})
    change_back_cash_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'change_back_cash_amount' }})
    currency: Optional[currency_enum.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_id' }})
    percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percentage' }})
    total_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_amount' }})
    total_discount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_discount' }})
    total_processing_fee: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_processing_fee' }})
    total_refund: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_refund' }})
    total_service_charge: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_service_charge' }})
    total_tax: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tax' }})
    total_tip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tip' }})
    transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_id' }})
    type: Optional[OrderTendersTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class Order:
    closed_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    currency: Optional[currency_enum.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    customers: Optional[List[OrderCustomers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customers' }})
    discounts: Optional[List[OrderDiscounts]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discounts' }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_id' }})
    fulfillments: Optional[List[OrderFulfillments]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillments' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    line_items: Optional[List[OrderLineItems]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'line_items' }})
    location_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    merchant_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant_id' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    order_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_number' }})
    order_type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_type_id' }})
    payment_status: Optional[OrderPosPaymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_status' }})
    payments: Optional[List[OrderPayments]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payments' }})
    reference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference_id' }})
    refunded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded' }})
    refunds: Optional[List[OrderRefunds]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunds' }})
    seat: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seat' }})
    service_charges: Optional[List[servicecharge.ServiceCharge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_charges' }})
    source: Optional[OrderSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    status: Optional[OrderStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    taxes: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxes' }})
    tenders: Optional[List[OrderTenders]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tenders' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    total_amount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_amount' }})
    total_discount: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_discount' }})
    total_refund: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_refund' }})
    total_service_charge: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_service_charge' }})
    total_tax: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tax' }})
    total_tip: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_tip' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    voided: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voided' }})
    voided_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voided_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
