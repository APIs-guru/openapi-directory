from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BotFilter:
    r"""BotFilter
    Filters the responses returned by the <code>ListBots</code> operation.
    """
    
    name: BotFilterNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: BotFilterOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
