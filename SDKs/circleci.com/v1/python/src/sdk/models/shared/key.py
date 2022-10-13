from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class KeyTypeEnum(str, Enum):
    DEPLOY_KEY = "deploy-key"
    GITHUB_USER_KEY = "github-user-key"


@dataclass_json
@dataclass
class Key:
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferred' }})
    public_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_key' }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[KeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
