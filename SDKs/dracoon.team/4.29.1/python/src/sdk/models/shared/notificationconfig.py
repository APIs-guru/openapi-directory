from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class NotificationConfig:
    channel_ids: List[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelIds' }})
    event_type_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTypeName' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    scope_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopeId' }})
    
