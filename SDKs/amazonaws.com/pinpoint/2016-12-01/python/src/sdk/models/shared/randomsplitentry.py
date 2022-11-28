from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RandomSplitEntry:
    r"""RandomSplitEntry
    Specifies the settings for a path in a random split activity in a journey.
    """
    
    next_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextActivity') }})
    percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Percentage') }})
    
