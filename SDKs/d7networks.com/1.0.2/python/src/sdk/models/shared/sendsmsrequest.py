from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SendSmsRequest:
    r"""SendSmsRequest
    Send SMS Request
    """
    
    content: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    from_: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('from') }})
    to: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('to') }})
    
