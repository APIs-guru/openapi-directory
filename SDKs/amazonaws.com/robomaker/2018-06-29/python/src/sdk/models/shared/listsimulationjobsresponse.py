from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import simulationjobsummary


@dataclass_json
@dataclass
class ListSimulationJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    simulation_job_summaries: List[simulationjobsummary.SimulationJobSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'simulationJobSummaries' }})
    
