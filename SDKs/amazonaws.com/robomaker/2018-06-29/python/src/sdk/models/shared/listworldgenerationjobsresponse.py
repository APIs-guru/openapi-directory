from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import worldgenerationjobsummary


@dataclass_json
@dataclass
class ListWorldGenerationJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    world_generation_job_summaries: List[worldgenerationjobsummary.WorldGenerationJobSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worldGenerationJobSummaries' }})
    
