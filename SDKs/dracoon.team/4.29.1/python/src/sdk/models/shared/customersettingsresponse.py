from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomerSettingsResponse:
    r"""CustomerSettingsResponse
    Customer settings
    """
    
    home_rooms_active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeRoomsActive') }})
    home_room_parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeRoomParentId') }})
    home_room_parent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeRoomParentName') }})
    home_room_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeRoomQuota') }})
    
