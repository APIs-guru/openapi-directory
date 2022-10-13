from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import roomwebhookassignment


@dataclass_json
@dataclass
class UpdateRoomWebhookRequest:
    items: List[roomwebhookassignment.RoomWebhookAssignment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    
