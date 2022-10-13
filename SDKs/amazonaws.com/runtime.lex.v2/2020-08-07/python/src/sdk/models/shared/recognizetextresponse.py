from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import interpretation
from . import message
from . import sessionstate


@dataclass_json
@dataclass
class RecognizeTextResponse:
    interpretations: Optional[List[interpretation.Interpretation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interpretations' }})
    messages: Optional[List[message.Message]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    request_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestAttributes' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    session_state: Optional[sessionstate.SessionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionState' }})
    
