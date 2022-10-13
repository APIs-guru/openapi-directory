from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import lineitem
from . import paymentoption_enum
from . import orderstatus_enum


@dataclass_json
@dataclass
class Order:
    line_items: Optional[List[lineitem.LineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LineItems' }})
    order_fulfilled_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderFulfilledDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderId' }})
    order_submission_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrderSubmissionDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    outpost_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutpostId' }})
    payment_option: Optional[paymentoption_enum.PaymentOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PaymentOption' }})
    status: Optional[orderstatus_enum.OrderStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
