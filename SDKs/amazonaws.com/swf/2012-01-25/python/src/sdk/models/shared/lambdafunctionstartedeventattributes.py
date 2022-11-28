from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LambdaFunctionStartedEventAttributes:
    r"""LambdaFunctionStartedEventAttributes
    Provides the details of the <code>LambdaFunctionStarted</code> event. It isn't set for other event types.
    """
    
    scheduled_event_id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledEventId') }})
    
