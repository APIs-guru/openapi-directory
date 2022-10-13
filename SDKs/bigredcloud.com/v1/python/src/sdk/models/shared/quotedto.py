from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import acudfvaluedto
from . import quoteproducttransdto


@dataclass_json
@dataclass
class QuoteDto:
    ac_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acCode' }})
    closed_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    comments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comments' }})
    company_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'companyId' }})
    custom_fields: Optional[List[acudfvaluedto.AcudfValueDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    customer_owner_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerOwnerId' }})
    customer_owner_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerOwnerName' }})
    dd_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ddNumber' }})
    delivery_list: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryList' }})
    delivery_to: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryTo' }})
    entry_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    layout_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'layoutType' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    po_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'poNumber' }})
    proc_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'procDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    product_trans: Optional[List[quoteproducttransdto.QuoteProductTransDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTrans' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    sale_invoice_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saleInvoiceId' }})
    sale_rep_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saleRepCode' }})
    sale_rep_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saleRepId' }})
    time_stamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeStamp' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    total_net: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalNet' }})
    total_vat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalVat' }})
    vat_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatTypeId' }})
    
