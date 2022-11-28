from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CashPaymentQueryDto:
    ac_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acCode') }})
    ac_entries: Optional[List[AcEntryDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acEntries') }})
    bank_account_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankAccountCode') }})
    bank_account_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bankAccountId') }})
    book_tran_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookTranTypeId') }})
    custom_fields: Optional[List[AcudfValueDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    detail_collection: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailCollection') }})
    discount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount') }})
    entry_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ledger: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ledger') }})
    lodgement: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lodgement') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    plaid_transaction_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plaidTransactionId') }})
    proc_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('procDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    supplier_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supplierId') }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    unallocated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unallocated') }})
    
