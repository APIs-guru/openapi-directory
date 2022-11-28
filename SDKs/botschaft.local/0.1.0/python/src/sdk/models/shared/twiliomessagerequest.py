from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TwilioMessageRequest:
    to: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    base64_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base64_message') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    
