from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LaunchPathSummary:
    r"""LaunchPathSummary
    Summary information about a product path for a user.
    """
    
    constraint_summaries: Optional[List[ConstraintSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConstraintSummaries') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    
