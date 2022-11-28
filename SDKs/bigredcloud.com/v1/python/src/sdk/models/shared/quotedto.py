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
class QuoteDto:
    ac_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acCode') }})
    closed_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comments') }})
    company_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('companyId') }})
    custom_fields: Optional[List[AcudfValueDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    customer_owner_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerOwnerId') }})
    customer_owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerOwnerName') }})
    dd_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ddNumber') }})
    delivery_list: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryList') }})
    delivery_to: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryTo') }})
    entry_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entryDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    layout_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layoutType') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    po_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('poNumber') }})
    proc_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('procDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    product_trans: Optional[List[QuoteProductTransDto]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('productTrans') }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reference') }})
    sale_invoice_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saleInvoiceId') }})
    sale_rep_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saleRepCode') }})
    sale_rep_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('saleRepId') }})
    time_stamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeStamp') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    total_net: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalNet') }})
    total_vat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalVat') }})
    vat_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatTypeId') }})
    
