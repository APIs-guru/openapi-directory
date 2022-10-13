from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import insightevent


@dataclass_json
@dataclass
class GetInsightEventsResult:
    insight_events: Optional[List[insightevent.InsightEvent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightEvents' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
