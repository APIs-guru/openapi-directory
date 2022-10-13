from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fleet


@dataclass_json
@dataclass
class ListFleetsResponse:
    fleet_details: Optional[List[fleet.Fleet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fleetDetails' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
