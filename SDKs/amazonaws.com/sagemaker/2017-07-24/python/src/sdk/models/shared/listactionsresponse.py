from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actionsummary


@dataclass_json
@dataclass
class ListActionsResponse:
    action_summaries: Optional[List[actionsummary.ActionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
