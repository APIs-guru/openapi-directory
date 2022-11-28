from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OutputLogEvent:
    r"""OutputLogEvent
    Represents a log event.
    """
    
    ingestion_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingestionTime') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp') }})
    
