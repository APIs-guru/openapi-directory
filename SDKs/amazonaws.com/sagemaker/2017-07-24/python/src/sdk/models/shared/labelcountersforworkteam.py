from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LabelCountersForWorkteam:
    r"""LabelCountersForWorkteam
    Provides counts for human-labeled tasks in the labeling job.
    """
    
    human_labeled: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HumanLabeled') }})
    pending_human: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PendingHuman') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Total') }})
    
