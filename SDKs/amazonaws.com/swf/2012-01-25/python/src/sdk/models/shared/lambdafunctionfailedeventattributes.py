from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LambdaFunctionFailedEventAttributes:
    r"""LambdaFunctionFailedEventAttributes
    Provides the details of the <code>LambdaFunctionFailed</code> event. It isn't set for other event types.
    """
    
    scheduled_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledEventId') }})
    started_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startedEventId') }})
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    
