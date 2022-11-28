from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Event:
    r"""Event
    A JSON object representing a batch of unique event occurrences in your app.
    """
    
    event_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    timestamp: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    metrics: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    session: Optional[Session] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
