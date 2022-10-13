from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetDashStreamingSessionURLOutput:
    dash_streaming_session_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DASHStreamingSessionURL' }})
    
