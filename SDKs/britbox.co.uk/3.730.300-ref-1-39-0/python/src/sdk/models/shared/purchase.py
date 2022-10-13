from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import itempurchase
from . import planpurchase


@dataclass_json
@dataclass
class Purchase:
    authorization_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    creation_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    item: Optional[itempurchase.ItemPurchase] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    payment_method_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMethodId' }})
    plan: Optional[planpurchase.PlanPurchase] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
