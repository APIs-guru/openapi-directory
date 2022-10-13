from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventsourcemappingconfiguration


@dataclass_json
@dataclass
class ListEventSourceMappingsResponse:
    event_source_mappings: Optional[List[eventsourcemappingconfiguration.EventSourceMappingConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSourceMappings' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    
