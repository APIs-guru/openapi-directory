from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import streamingsession


@dataclass_json
@dataclass
class ListStreamingSessionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    sessions: Optional[List[streamingsession.StreamingSession]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessions' }})
    
