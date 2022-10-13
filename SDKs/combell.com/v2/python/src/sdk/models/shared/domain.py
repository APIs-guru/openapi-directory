from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Domain:
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_name' }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiration_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    will_renew: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'will_renew' }})
    
