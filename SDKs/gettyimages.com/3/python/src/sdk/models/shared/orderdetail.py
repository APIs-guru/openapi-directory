from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import assetidfromorder
from . import ordernotes


@dataclass_json
@dataclass
class OrderDetail:
    assets: Optional[List[assetidfromorder.AssetIDFromOrder]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assets' }})
    end_client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_client' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    invoice_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invoice_number' }})
    notes: Optional[ordernotes.OrderNotes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    order_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
