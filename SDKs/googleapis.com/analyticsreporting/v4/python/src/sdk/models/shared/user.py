from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class UserTypeEnum(str, Enum):
    USER_ID_TYPE_UNSPECIFIED = "USER_ID_TYPE_UNSPECIFIED"
    USER_ID = "USER_ID"
    CLIENT_ID = "CLIENT_ID"


@dataclass_json
@dataclass
class User:
    type: Optional[UserTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
