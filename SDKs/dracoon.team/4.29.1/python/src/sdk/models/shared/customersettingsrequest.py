from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomerSettingsRequest:
    r"""CustomerSettingsRequest
    Request model for setting the customer settings
    """
    
    home_room_parent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeRoomParentName') }})
    home_room_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeRoomQuota') }})
    home_rooms_active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeRoomsActive') }})
    
