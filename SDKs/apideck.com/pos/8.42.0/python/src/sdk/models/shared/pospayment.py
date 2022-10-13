from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class PosPaymentBankAccountAchDetails:
    account_number_suffix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_number_suffix' }})
    account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_type' }})
    routing_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routing_number' }})
    

@dataclass_json
@dataclass
class PosPaymentBankAccountBankAccount:
    account_ownership_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_ownership_type' }})
    ach_details: Optional[PosPaymentBankAccountAchDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ach_details' }})
    bank_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_name' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    statement_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statement_description' }})
    transfer_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer_type' }})
    

@dataclass_json
@dataclass
class PosPaymentCardDetails:
    card: Optional[shared.PaymentCard] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card' }})
    

@dataclass_json
@dataclass
class PosPaymentCashCashDetails:
    amount: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    charge_back_amount: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'charge_back_amount' }})
    
class PosPaymentExternalDetailsTypeEnum(str, Enum):
    CHECK = "check"
    BANK_TRANSFER = "bank_transfer"
    OTHER_GIFT_CARD = "other_gift_card"
    CRYPTO = "crypto"
    SQUARE_CASH = "square_cash"
    SOCIAL = "social"
    EXTERNAL = "external"
    EMONEY = "emoney"
    CARD = "card"
    STORED_BALANCE = "stored_balance"
    FOOD_VOUCHER = "food_voucher"
    OTHER = "other"


@dataclass_json
@dataclass
class PosPaymentExternalDetails:
    source: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_fee_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_fee_amount' }})
    source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_id' }})
    type: PosPaymentExternalDetailsTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PosPaymentSourceEnum(str, Enum):
    CARD = "card"
    BANK_ACCOUNT = "bank_account"
    WALLET = "wallet"
    BNPL = "bnpl"
    CASH = "cash"
    EXTERNAL = "external"
    OTHER = "other"

class PosPaymentStatusStatusEnum(str, Enum):
    APPROVED = "approved"
    PENDING = "pending"
    COMPLETED = "completed"
    CANCELED = "canceled"
    FAILED = "failed"
    OTHER = "other"

class PosPaymentWalletStatusEnum(str, Enum):
    AUTHORIZED = "authorized"
    CAPTURED = "captured"
    VOIDED = "voided"
    FAILED = "failed"
    OTHER = "other"


@dataclass_json
@dataclass
class PosPaymentWalletWalletDetails:
    status: Optional[PosPaymentWalletStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PosPayment:
    amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    app_fee: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'app_fee' }})
    approved: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approved' }})
    bank_account: Optional[PosPaymentBankAccountBankAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_account' }})
    card_details: Optional[PosPaymentCardDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'card_details' }})
    cash: Optional[PosPaymentCashCashDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cash' }})
    change_back_cash_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'change_back_cash_amount' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    currency: shared.CurrencyEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    customer_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_id' }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_id' }})
    employee_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'employee_id' }})
    external_details: Optional[PosPaymentExternalDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_details' }})
    external_payment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'external_payment_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    idempotency_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'idempotency_key' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchant_id' }})
    order_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_id' }})
    processing_fees: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'processing_fees' }})
    refunded: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunded' }})
    service_charges: Optional[List[shared.ServiceCharge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_charges' }})
    source: Optional[PosPaymentSourceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_id' }})
    status: Optional[PosPaymentStatusStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tax: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tax' }})
    tender_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tender_id' }})
    tip: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tip' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    wallet: Optional[PosPaymentWalletWalletDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wallet' }})
    
