from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import simulationapplicationsummary


@dataclass_json
@dataclass
class ListSimulationApplicationsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    simulation_application_summaries: Optional[List[simulationapplicationsummary.SimulationApplicationSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simulationApplicationSummaries' }})
    
