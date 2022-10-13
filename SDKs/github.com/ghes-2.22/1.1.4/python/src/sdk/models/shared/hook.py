from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import hook_response


@dataclass_json
@dataclass
class HookConfig:
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_type' }})
    digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digest' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    insecure_ssl: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insecure_ssl' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    room: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'room' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    subdomain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subdomain' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class Hook:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    config: HookConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    events: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'events' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_response: hook_response.HookResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_response' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ping_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ping_url' }})
    test_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'test_url' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
