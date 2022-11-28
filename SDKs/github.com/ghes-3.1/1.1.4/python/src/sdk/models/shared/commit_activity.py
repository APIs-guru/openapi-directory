from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CommitActivity:
    r"""CommitActivity
    Commit Activity
    """
    
    days: List[int] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('days') }})
    total: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    week: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    
