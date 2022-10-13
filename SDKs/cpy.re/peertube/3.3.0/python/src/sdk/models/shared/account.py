from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Account:
    avatar: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    followers_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followersCount' }})
    following_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followingCount' }})
    host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'host' }})
    host_redundancy_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostRedundancyAllowed' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user_id: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
