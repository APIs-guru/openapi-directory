from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EventData:
    r"""EventData
    Represents all the details pertaining to an event.
    """
    
    event_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventAction') }})
    event_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventCategory') }})
    event_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventCount') }})
    event_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventLabel') }})
    event_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventValue') }})
    
