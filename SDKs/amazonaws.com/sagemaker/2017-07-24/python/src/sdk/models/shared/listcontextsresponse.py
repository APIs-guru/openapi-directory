from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contextsummary


@dataclass_json
@dataclass
class ListContextsResponse:
    context_summaries: Optional[List[contextsummary.ContextSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ContextSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
