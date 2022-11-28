from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEventSourceMappingsResponse:
    event_source_mappings: Optional[List[EventSourceMappingConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSourceMappings') }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextMarker') }})
    
