from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import streamingsession


@dataclass_json
@dataclass
class CreateStreamingSessionResponse:
    session: Optional[streamingsession.StreamingSession] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session' }})
    
