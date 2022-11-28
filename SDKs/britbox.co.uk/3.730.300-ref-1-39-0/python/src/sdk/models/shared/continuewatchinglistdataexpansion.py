from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ContinueWatchingListDataExpansion:
    episode: Optional[ItemSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episode') }})
    season: Optional[ItemSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    show: Optional[ItemSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show') }})
    
