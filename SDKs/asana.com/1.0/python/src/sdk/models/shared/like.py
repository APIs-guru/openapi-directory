from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import usercompact


@dataclass_json
@dataclass
class Like:
    gid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gid' }})
    user: Optional[usercompact.UserCompact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
