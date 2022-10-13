from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import message
from . import message


@dataclass_json
@dataclass
class MessageGroup:
    message: message.Message = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    variations: Optional[List[message.Message]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'variations' }})
    
