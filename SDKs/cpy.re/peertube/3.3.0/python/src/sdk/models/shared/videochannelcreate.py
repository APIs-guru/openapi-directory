from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VideoChannelCreateOwnerAccount:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uuid' }})
    

@dataclass_json
@dataclass
class VideoChannelCreate:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    id: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_local: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isLocal' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    owner_account: Optional[VideoChannelCreateOwnerAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerAccount' }})
    support: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'support' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
