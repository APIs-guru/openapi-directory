from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import userkeypaircontainer


@dataclass_json
@dataclass
class EncryptRoomRequest:
    data_room_rescue_key: Optional[userkeypaircontainer.UserKeyPairContainer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataRoomRescueKey' }})
    is_encrypted: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isEncrypted' }})
    use_data_space_rescue_key: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useDataSpaceRescueKey' }})
    
