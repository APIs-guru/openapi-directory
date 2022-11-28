from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetCalendarStateResponse:
    at_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AtTime') }})
    next_transition_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextTransitionTime') }})
    state: Optional[CalendarStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
