from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OAuthAuthorizationUserAgentCategoryEnum(str, Enum):
    BROWSER = "browser"
    NATIVE = "native"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class OAuthAuthorization:
    client_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientId' }})
    client_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientName' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    expires_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_current_authorization: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCurrentAuthorization' }})
    is_standard: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isStandard' }})
    used_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    user_agent_category: OAuthAuthorizationUserAgentCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgentCategory' }})
    user_agent_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgentInfo' }})
    user_agent_os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgentOs' }})
    user_agent_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userAgentType' }})
    
