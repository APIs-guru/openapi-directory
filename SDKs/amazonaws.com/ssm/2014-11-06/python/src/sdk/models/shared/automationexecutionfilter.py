from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutomationExecutionFilter:
    r"""AutomationExecutionFilter
    A filter used to match specific automation executions. This is used to limit the scope of Automation execution information returned.
    """
    
    key: AutomationExecutionFilterKeyEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Key') }})
    values: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Values') }})
    
