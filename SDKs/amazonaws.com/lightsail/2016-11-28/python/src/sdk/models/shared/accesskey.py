from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import accesskeylastused
from . import statustype_enum


@dataclass_json
@dataclass
class AccessKey:
    access_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessKeyId' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_used: Optional[accesskeylastused.AccessKeyLastUsed] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUsed' }})
    secret_access_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secretAccessKey' }})
    status: Optional[statustype_enum.StatusTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
