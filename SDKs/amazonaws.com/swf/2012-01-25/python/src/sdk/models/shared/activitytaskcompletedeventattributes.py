from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ActivityTaskCompletedEventAttributes:
    r"""ActivityTaskCompletedEventAttributes
    Provides the details of the <code>ActivityTaskCompleted</code> event.
    """
    
    scheduled_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledEventId') }})
    started_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
