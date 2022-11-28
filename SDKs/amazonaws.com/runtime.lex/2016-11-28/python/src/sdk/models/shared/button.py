from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Button:
    r"""Button
    Represents an option to be shown on the client platform (Facebook, Slack, etc.)
    """
    
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
