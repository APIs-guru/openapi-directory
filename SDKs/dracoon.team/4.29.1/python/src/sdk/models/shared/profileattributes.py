from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProfileAttributes:
    r"""ProfileAttributes
    User profile attributes
    """
    
    items: List[KeyValueEntry] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    range: Range = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
