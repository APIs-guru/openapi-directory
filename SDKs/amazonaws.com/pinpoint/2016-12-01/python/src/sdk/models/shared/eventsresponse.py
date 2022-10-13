from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import itemresponse


@dataclass_json
@dataclass
class EventsResponse:
    results: Optional[dict[str, itemresponse.ItemResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Results' }})
    
