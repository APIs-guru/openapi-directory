from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TransferMessageSeverityEnum(str, Enum):
    MESSAGE_SEVERITY_UNSPECIFIED = "MESSAGE_SEVERITY_UNSPECIFIED"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class TransferMessage:
    message_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageText' }})
    message_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageTime' }})
    severity: Optional[TransferMessageSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    
