from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CustomerSettingsResponse:
    home_room_parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeRoomParentId' }})
    home_room_parent_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeRoomParentName' }})
    home_room_quota: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeRoomQuota' }})
    home_rooms_active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeRoomsActive' }})
    
