from dataclasses import dataclass, field
from typing import List,Optional
from . import *


@dataclass
class GetInsightRuleReportOutput:
    aggregate_value: Optional[float] = field(default=None)
    aggregation_statistic: Optional[str] = field(default=None)
    approximate_unique_count: Optional[int] = field(default=None)
    contributors: Optional[List[InsightRuleContributor]] = field(default=None)
    key_labels: Optional[List[str]] = field(default=None)
    metric_datapoints: Optional[List[InsightRuleMetricDatapoint]] = field(default=None)
    
