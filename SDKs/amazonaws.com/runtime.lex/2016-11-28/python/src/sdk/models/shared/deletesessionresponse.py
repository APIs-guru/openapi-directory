from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteSessionResponse:
    bot_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botAlias' }})
    bot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'botName' }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionId' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
