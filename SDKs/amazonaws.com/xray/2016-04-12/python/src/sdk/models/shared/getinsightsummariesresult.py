from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import insightsummary


@dataclass_json
@dataclass
class GetInsightSummariesResult:
    insight_summaries: Optional[List[insightsummary.InsightSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
