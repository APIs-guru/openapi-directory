from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BotLocaleFilter:
    r"""BotLocaleFilter
    Filters responses returned by the <code>ListBotLocales</code> operation.
    """
    
    name: BotLocaleFilterNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: BotLocaleFilterOperatorEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('values') }})
    
