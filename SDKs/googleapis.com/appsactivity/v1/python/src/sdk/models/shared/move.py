from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Move:
    r"""Move
    Contains information about changes in an object's parents as a result of a move type event.
    """
    
    added_parents: Optional[List[Parent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedParents') }})
    removed_parents: Optional[List[Parent]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removedParents') }})
    
