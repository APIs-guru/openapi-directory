from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import answersummary


@dataclass_json
@dataclass
class ListAnswersOutput:
    answer_summaries: Optional[List[answersummary.AnswerSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnswerSummaries' }})
    lens_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LensAlias' }})
    milestone_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MilestoneNumber' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    workload_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WorkloadId' }})
    
