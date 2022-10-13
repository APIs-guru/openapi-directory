from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import responseplansummary


@dataclass_json
@dataclass
class ListResponsePlansOutput:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    response_plan_summaries: List[responseplansummary.ResponsePlanSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responsePlanSummaries' }})
    
