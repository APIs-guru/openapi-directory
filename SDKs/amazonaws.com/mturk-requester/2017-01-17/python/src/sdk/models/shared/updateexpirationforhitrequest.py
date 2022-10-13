from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateExpirationForHitRequest:
    expire_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpireAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hit_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HITId' }})
    
