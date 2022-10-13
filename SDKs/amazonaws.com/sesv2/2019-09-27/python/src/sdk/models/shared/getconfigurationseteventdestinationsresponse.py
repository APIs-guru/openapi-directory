from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import eventdestination


@dataclass_json
@dataclass
class GetConfigurationSetEventDestinationsResponse:
    event_destinations: Optional[List[eventdestination.EventDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventDestinations' }})
    
