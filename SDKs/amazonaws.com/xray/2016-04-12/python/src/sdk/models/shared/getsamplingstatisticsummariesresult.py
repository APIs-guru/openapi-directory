from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import samplingstatisticsummary


@dataclass_json
@dataclass
class GetSamplingStatisticSummariesResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sampling_statistic_summaries: Optional[List[samplingstatisticsummary.SamplingStatisticSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SamplingStatisticSummaries' }})
    
