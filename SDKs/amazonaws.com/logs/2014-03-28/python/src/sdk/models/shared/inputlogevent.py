from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class InputLogEvent:
    r"""InputLogEvent
    Represents a log event, which is a record of activity that was recorded by the application or resource being monitored.
    """
    
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    timestamp: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
