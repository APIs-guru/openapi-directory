from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class JourneyEmailMessage:
    r"""JourneyEmailMessage
    Specifies the \"From\" address for an email message that's sent to participants in a journey.
    """
    
    from_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromAddress') }})
    
