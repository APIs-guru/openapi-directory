from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CheckReadyStatusRequest:
    play_ready_message: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'play_ready_message' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    
