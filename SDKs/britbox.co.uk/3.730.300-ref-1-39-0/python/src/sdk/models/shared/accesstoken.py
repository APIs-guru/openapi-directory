from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AccessTokenTypeEnum(str, Enum):
    USER_ACCOUNT = "UserAccount"
    USER_PROFILE = "UserProfile"


@dataclass_json
@dataclass
class AccessToken:
    account_created: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountCreated' }})
    expiration_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    refreshable: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refreshable' }})
    type: AccessTokenTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
