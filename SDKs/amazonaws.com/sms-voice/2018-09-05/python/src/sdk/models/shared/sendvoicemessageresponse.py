from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SendVoiceMessageResponse:
    r"""SendVoiceMessageResponse
    An object that that contains the Message ID of a Voice message that was sent successfully.
    """
    
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MessageId') }})
    
