from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import worldexportjobsummary


@dataclass_json
@dataclass
class ListWorldExportJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    world_export_job_summaries: List[worldexportjobsummary.WorldExportJobSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'worldExportJobSummaries' }})
    
