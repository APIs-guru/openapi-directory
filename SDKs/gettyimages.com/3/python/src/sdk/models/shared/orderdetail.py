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
class OrderDetail:
    assets: Optional[List[AssetIDFromOrder]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assets') }})
    end_client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_client') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invoice_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoice_number') }})
    notes: Optional[OrderNotes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    order_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
