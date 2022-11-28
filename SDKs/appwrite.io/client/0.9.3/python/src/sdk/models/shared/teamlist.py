from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TeamList:
    r"""TeamList
    Teams List
    """
    
    sum: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sum') }})
    teams: List[Team] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('teams') }})
    
