from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSimulationJobsResponse:
    simulation_job_summaries: List[SimulationJobSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('simulationJobSummaries') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    
