from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import insightresults


@dataclass_json
@dataclass
class GetInsightResultsResponse:
    insight_results: insightresults.InsightResults = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightResults' }})
    
