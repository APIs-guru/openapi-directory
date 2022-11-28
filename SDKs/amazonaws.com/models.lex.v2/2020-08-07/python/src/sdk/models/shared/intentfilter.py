from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IntentFilter:
    r"""IntentFilter
    Filters the response from the <code>ListIntents</code> operation.
    """
    
    name: IntentFilterNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: IntentFilterOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
