from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import linkedledgeraccount
from . import currency_enum
from . import linkedcustomer

class PaymentAllocationsAllocationTypeEnum(str, Enum):
    INVOICE = "invoice"
    ORDER = "order"
    EXPENSE = "expense"
    CREDIT_MEMO = "credit_memo"
    OVER_PAYMENT = "over_payment"
    PRE_PAYMENT = "pre_payment"


@dataclass_json
@dataclass
class PaymentAllocations:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[PaymentAllocationsAllocationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PaymentPaymentStatusEnum(str, Enum):
    AUTHORISED = "authorised"
    PAID = "paid"
    VOIDED = "voided"
    DELETED = "deleted"

class PaymentPaymentTypeEnum(str, Enum):
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
    account: Optional[linkedledgeraccount.LinkedLedgerAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    accounts_receivable_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts_receivable_account_id' }})
    accounts_receivable_account_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts_receivable_account_type' }})
    allocations: Optional[List[PaymentAllocations]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allocations' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_by' }})
    currency: Optional[currency_enum.CurrencyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    currency_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_rate' }})
    customer: Optional[linkedcustomer.LinkedCustomer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    display_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_id' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    payment_method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_method' }})
    payment_method_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payment_method_reference' }})
    reconciled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reconciled' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    row_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'row_version' }})
    status: Optional[PaymentPaymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    total_amount: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_amount' }})
    transaction_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transaction_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[PaymentPaymentTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_by' }})
    
