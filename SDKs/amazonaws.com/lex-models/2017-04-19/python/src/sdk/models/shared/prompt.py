from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import message


@dataclass_json
@dataclass
class Prompt:
    max_attempts: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxAttempts' }})
    messages: List[message.Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    response_card: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseCard' }})
    
