from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartSessionResponse:
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionId' }})
    stream_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamUrl' }})
    token_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TokenValue' }})
    
