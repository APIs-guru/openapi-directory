from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountLineItemEntity:
    r"""AccountLineItemEntity
    List Payments
    """
    
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('amount') }})
    balance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    download_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_uri') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invoice_line_items: Optional[InvoiceLineItemEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_line_items') }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('method') }})
    payment_line_items: Optional[PaymentLineItemEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_line_items') }})
    payment_reversed_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_reversed_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    payment_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payment_type') }})
    site_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('site_name') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
