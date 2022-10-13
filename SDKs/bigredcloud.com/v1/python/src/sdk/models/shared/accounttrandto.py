from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AccountTranDto:
    book_tran_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookTranId' }})
    book_tran_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookTranTypeId' }})
    book_transaction_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookTransactionReference' }})
    book_type_desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookTypeDesc' }})
    credit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'credit' }})
    debit: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'debit' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    proc_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'procDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
