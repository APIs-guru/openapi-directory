from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Button:
    r"""Button
    A button that appears on a response card show to the user.
    """
    
    text: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    value: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
