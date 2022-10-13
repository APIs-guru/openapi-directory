from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import calendarstate_enum


@dataclass_json
@dataclass
class GetCalendarStateResponse:
    at_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AtTime' }})
    next_transition_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextTransitionTime' }})
    state: Optional[calendarstate_enum.CalendarStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
