from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RawMessage:
    r"""RawMessage
    Represents the raw content of an email message.
    """
    
    data: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    
