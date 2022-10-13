from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import session


@dataclass_json
@dataclass
class SessionList:
    sessions: List[session.Session] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessions' }})
    sum: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    
