from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssetUsage:
    asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_id' }})
    quantity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quantity' }})
    usage_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
