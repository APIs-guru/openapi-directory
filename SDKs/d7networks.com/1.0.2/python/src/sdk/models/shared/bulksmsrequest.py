from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import message


@dataclass_json
@dataclass
class BulkSmsRequest:
    messages: List[message.Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    
