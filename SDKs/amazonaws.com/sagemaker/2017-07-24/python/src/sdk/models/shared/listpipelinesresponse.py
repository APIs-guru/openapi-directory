from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pipelinesummary


@dataclass_json
@dataclass
class ListPipelinesResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    pipeline_summaries: Optional[List[pipelinesummary.PipelineSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PipelineSummaries' }})
    
