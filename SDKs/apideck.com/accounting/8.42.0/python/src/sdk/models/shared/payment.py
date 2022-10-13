from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class PaymentStatusPaymentStatusEnum(str, Enum):
    AUTHORISED = "authorised"
    PAID = "paid"
    VOIDED = "voided"
    DELETED = "deleted"

class PaymentTypePaymentTypeEnum(str, Enum):
    ACCOUNTS_RECEIVABLE = "accounts_receivable"
    ACCOUNTS_PAYABLE = "accounts_payable"
    ACCOUNTS_RECEIVABLE_CREDIT = "accounts_receivable_credit"
    ACCOUNTS_PAYABLE_CREDIT = "accounts_payable_credit"
    ACCOUNTS_RECEIVABLE_OVERPAYMENT = "accounts_receivable_overpayment"
    ACCOUNTS_PAYABLE_OVERPAYMENT = "accounts_payable_overpayment"
    ACCOUNTS_RECEIVABLE_PREPAYMENT = "accounts_receivable_prepayment"
    ACCOUNTS_PAYABLE_PREPAYMENT = "accounts_payable_prepayment"


@dataclass_json
@dataclass
class Payment:
    account: Optional[shared.LinkedLedgerAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    accounts_receivable_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts_receivable_account_id' }})
    accounts_receivable_account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts_receivable_account_type' }})
    allocations: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allocations' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: Optional[shared.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    currency_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_rate' }})
    customer: Optional[shared.LinkedCustomer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    payment_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_method' }})
    payment_method_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_method_reference' }})
    reconciled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reconciled' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_version' }})
    status: Optional[PaymentStatusPaymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    total_amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_amount' }})
    transaction_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[PaymentTypePaymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
