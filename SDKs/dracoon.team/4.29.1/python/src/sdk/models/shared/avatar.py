from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Avatar:
    r"""Avatar
    User avatar information
    """
    
    avatar_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatarUri') }})
    avatar_uuid: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatarUuid') }})
    is_custom_avatar: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isCustomAvatar') }})
    
