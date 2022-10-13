from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

class EncryptionInfoDataSpaceKeyStateEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    PENDING = "pending"

class EncryptionInfoRoomKeyStateEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    PENDING = "pending"

class EncryptionInfoUserKeyStateEnum(str, Enum):
    NONE = "none"
    AVAILABLE = "available"
    PENDING = "pending"


@dataclass_json
@dataclass
class EncryptionInfo:
    data_space_key_state: EncryptionInfoDataSpaceKeyStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSpaceKeyState' }})
    room_key_state: EncryptionInfoRoomKeyStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roomKeyState' }})
    user_key_state: EncryptionInfoUserKeyStateEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userKeyState' }})
    
