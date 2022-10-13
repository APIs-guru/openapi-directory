from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import roomwebhook
from . import range


@dataclass_json
@dataclass
class RoomWebhookList:
    items: List[roomwebhook.RoomWebhook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    range: range.Range = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    
