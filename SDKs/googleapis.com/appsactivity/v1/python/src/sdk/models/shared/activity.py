from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Activity:
    r"""Activity
    An Activity resource is a combined view of multiple events. An activity has a list of individual events and a combined view of the common fields among all events.
    """
    
    combined_event: Optional[Event] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('combinedEvent') }})
    single_events: Optional[List[Event]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('singleEvents') }})
    
