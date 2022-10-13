from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class APICallDetails:
    api: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api' }})
    api_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiServiceName' }})
    first_seen: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstSeen', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_seen: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSeen', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
