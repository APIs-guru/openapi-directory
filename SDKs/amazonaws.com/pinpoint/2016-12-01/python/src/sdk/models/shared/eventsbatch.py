from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventsBatch:
    r"""EventsBatch
    Specifies a batch of endpoints and events to process.
    """
    
    endpoint: PublicEndpoint = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Endpoint') }})
    events: dict[str, Event] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Events') }})
    
