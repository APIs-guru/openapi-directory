from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import session


@dataclass_json
@dataclass
class PlayMediaIntentHandlingInvocation:
    method: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    params: dict[str, Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    session: Optional[session.Session] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session' }})
    
