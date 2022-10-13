from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import transformjobsummary


@dataclass_json
@dataclass
class ListTransformJobsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    transform_job_summaries: List[transformjobsummary.TransformJobSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TransformJobSummaries' }})
    
