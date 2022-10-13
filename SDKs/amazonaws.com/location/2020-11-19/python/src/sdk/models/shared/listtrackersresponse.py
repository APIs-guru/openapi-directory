from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listtrackersresponseentry


@dataclass_json
@dataclass
class ListTrackersResponse:
    entries: List[listtrackersresponseentry.ListTrackersResponseEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
