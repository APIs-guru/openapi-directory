from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MarkerRecordedEventAttributes:
    r"""MarkerRecordedEventAttributes
    Provides the details of the <code>MarkerRecorded</code> event.
    """
    
    decision_task_completed_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('decisionTaskCompletedEventId') }})
    marker_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('markerName') }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    
