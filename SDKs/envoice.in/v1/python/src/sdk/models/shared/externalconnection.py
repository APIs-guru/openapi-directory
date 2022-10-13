from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ExternalConnection:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessToken' }})
    access_token_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccessTokenSecret' }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    expires_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExpiresOn', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    external_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalUserId' }})
    external_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalUsername' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Provider' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    
