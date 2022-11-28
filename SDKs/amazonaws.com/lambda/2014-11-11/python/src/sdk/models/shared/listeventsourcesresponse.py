from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEventSourcesResponse:
    r"""ListEventSourcesResponse
    Contains a list of event sources (see <a>API_EventSourceConfiguration</a>)
    """
    
    event_sources: Optional[List[EventSourceConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSources') }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
