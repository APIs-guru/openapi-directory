from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import compilationjobsummary


@dataclass_json
@dataclass
class ListCompilationJobsResponse:
    compilation_job_summaries: List[compilationjobsummary.CompilationJobSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CompilationJobSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
