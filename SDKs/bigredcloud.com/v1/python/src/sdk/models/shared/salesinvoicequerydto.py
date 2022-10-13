from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import acudfvaluedto
from . import producttranquerydto


@dataclass_json
@dataclass
class SalesInvoiceQueryDto:
    ac_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acCode' }})
    book_tran_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookTranTypeId' }})
    custom_fields: Optional[List[acudfvaluedto.AcudfValueDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    customer_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    delivery_to: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryTo' }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    entry_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entryDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    lo_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loType' }})
    net_goods: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netGoods' }})
    net_services: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netServices' }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    our_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ourReference' }})
    proc_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'procDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    product_trans: Optional[List[producttranquerydto.ProductTranQueryDto]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'productTrans' }})
    quote_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quoteId' }})
    reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reference' }})
    sale_rep_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saleRepCode' }})
    sale_rep_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'saleRepId' }})
    timestamp: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    total_net: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalNet' }})
    total_vat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalVAT' }})
    unpaid: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unpaid' }})
    vat_type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vatTypeId' }})
    your_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yourReference' }})
    
