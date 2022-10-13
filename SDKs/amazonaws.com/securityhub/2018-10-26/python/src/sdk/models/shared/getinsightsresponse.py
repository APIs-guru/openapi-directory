from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import insight


@dataclass_json
@dataclass
class GetInsightsResponse:
    insights: List[insight.Insight] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Insights' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
