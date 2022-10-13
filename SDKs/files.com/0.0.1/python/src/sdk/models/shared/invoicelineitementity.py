from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class InvoiceLineItemEntityTypeEnum(str, Enum):
    INVOICE = "invoice"
    ADJUSTMENT = "adjustment"
    USAGE_OVERAGE = "usage_overage"
    USER_OVERAGE = "user_overage"
    ADDON_SUBSCRIPTION = "addon_subscription"
    MISC_FEE = "misc_fee"


@dataclass_json
@dataclass
class InvoiceLineItemEntity:
    amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amount' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    plan: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plan' }})
    service_end_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_end_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_start_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_start_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    site: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    type: Optional[InvoiceLineItemEntityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
