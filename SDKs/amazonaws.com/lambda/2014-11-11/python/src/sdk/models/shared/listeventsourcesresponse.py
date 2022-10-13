from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventsourceconfiguration


@dataclass_json
@dataclass
class ListEventSourcesResponse:
    event_sources: Optional[List[eventsourceconfiguration.EventSourceConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSources' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    
