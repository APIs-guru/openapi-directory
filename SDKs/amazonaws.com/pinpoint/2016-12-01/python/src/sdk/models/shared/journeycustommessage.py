from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JourneyCustomMessage:
    r"""JourneyCustomMessage
    Specifies the message content for a custom channel message that's sent to participants in a journey.
    """
    
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    
