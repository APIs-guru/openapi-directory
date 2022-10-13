from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import simulationjob


@dataclass_json
@dataclass
class BatchDescribeSimulationJobResponse:
    jobs: Optional[List[simulationjob.SimulationJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobs' }})
    unprocessed_jobs: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unprocessedJobs' }})
    
