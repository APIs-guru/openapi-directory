from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SessionList:
    r"""SessionList
    Sessions List
    """
    
    sessions: List[Session] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessions') }})
    sum: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    
