from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Avatar:
    avatar_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatarUri' }})
    avatar_uuid: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatarUuid' }})
    is_custom_avatar: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isCustomAvatar' }})
    
