from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EncryptRoomRequest:
    r"""EncryptRoomRequest
    Request model for handling encryption settings for a room
    """
    
    is_encrypted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isEncrypted') }})
    data_room_rescue_key: Optional[UserKeyPairContainer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRoomRescueKey') }})
    use_data_space_rescue_key: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useDataSpaceRescueKey') }})
    
