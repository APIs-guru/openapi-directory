from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HovercardContexts:
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    octicon: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('octicon') }})
    

@dataclass_json
@dataclass
class Hovercard:
    r"""Hovercard
    Hovercard
    """
    
    contexts: List[HovercardContexts] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    
