from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import operationtype_enum


@dataclass_json
@dataclass
class BillingRecord:
    bill_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BillDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DomainName' }})
    invoice_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvoiceId' }})
    operation: Optional[operationtype_enum.OperationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operation' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Price' }})
    
