from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Filter:
    r"""Filter
    Filter the selection by using a condition.
    """
    
    condition: Condition = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    
