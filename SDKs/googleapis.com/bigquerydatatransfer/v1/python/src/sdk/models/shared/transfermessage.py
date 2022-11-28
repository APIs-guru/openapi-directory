from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TransferMessageSeverityEnum(str, Enum):
    MESSAGE_SEVERITY_UNSPECIFIED = "MESSAGE_SEVERITY_UNSPECIFIED"
    INFO = "INFO"
    WARNING = "WARNING"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class TransferMessage:
    r"""TransferMessage
    Represents a user facing message for a particular data transfer run.
    """
    
    message_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageText') }})
    message_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageTime') }})
    severity: Optional[TransferMessageSeverityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
