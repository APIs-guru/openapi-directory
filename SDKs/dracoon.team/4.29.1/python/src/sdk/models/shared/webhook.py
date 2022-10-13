from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userinfo
from . import userinfo


@dataclass_json
@dataclass
class Webhook:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    created_by: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdBy' }})
    event_type_names: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTypeNames' }})
    expire_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    fail_status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failStatus' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEnabled' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_by: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedBy' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
