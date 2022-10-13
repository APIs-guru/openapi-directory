from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import humanloopsummary


@dataclass_json
@dataclass
class ListHumanLoopsResponse:
    human_loop_summaries: List[humanloopsummary.HumanLoopSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HumanLoopSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
