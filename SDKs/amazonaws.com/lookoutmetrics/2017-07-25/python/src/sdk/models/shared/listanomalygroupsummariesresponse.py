from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import anomalygroupstatistics
from . import anomalygroupsummary


@dataclass_json
@dataclass
class ListAnomalyGroupSummariesResponse:
    anomaly_group_statistics: Optional[anomalygroupstatistics.AnomalyGroupStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyGroupStatistics' }})
    anomaly_group_summary_list: Optional[List[anomalygroupsummary.AnomalyGroupSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AnomalyGroupSummaryList' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
