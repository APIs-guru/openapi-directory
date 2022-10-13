from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ClientUserStatusEnum(str, Enum):
    USER_STATUS_UNSPECIFIED = "USER_STATUS_UNSPECIFIED"
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    DISABLED = "DISABLED"


@dataclass_json
@dataclass
class ClientUser:
    client_account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientAccountId' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    status: Optional[ClientUserStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
