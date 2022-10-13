from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import flowexecutionsummary


@dataclass_json
@dataclass
class SearchFlowExecutionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    summaries: Optional[List[flowexecutionsummary.FlowExecutionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summaries' }})
    
