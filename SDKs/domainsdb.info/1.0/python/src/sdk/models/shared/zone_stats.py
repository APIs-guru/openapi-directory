from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ZoneStats:
    time: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    next_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next_page') }})
    statistics: Optional[List[ZoneStatistics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    
