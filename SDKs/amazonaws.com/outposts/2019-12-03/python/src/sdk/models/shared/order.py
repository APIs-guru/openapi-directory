from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Order:
    r"""Order
    Information about an order.
    """
    
    line_items: Optional[List[LineItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LineItems') }})
    order_fulfilled_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderFulfilledDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderId') }})
    order_submission_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrderSubmissionDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    outpost_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OutpostId') }})
    payment_option: Optional[PaymentOptionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PaymentOption') }})
    status: Optional[OrderStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
