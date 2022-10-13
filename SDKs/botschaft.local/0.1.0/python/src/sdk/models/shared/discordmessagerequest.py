from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DiscordMessageRequest:
    base64_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base64_message' }})
    channel: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    
