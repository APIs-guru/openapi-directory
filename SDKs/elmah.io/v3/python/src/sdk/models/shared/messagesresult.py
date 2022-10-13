from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import messageoverview


@dataclass_json
@dataclass
class MessagesResult:
    messages: Optional[List[messageoverview.MessageOverview]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    
