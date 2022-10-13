from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SendSmsRequest:
    content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    from_: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    to: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    
