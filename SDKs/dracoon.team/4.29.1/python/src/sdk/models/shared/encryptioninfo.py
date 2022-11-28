from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""EncryptionInfo
    Encryption states
    """
    
    data_space_key_state: EncryptionInfoDataSpaceKeyStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSpaceKeyState') }})
    room_key_state: EncryptionInfoRoomKeyStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roomKeyState') }})
    user_key_state: EncryptionInfoUserKeyStateEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userKeyState') }})
    
