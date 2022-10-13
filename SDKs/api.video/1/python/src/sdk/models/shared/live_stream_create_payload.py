from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LiveStreamCreatePayload:
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    player_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playerId' }})
    public: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public' }})
    record: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'record' }})
    
