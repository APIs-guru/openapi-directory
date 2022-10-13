from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fleetsummary


@dataclass_json
@dataclass
class ListFleetsResponse:
    fleet_summary_list: Optional[List[fleetsummary.FleetSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FleetSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
