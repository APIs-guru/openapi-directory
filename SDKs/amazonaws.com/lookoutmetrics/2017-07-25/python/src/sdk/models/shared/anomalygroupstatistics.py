from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import itemizedmetricstats


@dataclass_json
@dataclass
class AnomalyGroupStatistics:
    evaluation_start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EvaluationStartDate' }})
    itemized_metric_stats_list: Optional[List[itemizedmetricstats.ItemizedMetricStats]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ItemizedMetricStatsList' }})
    total_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCount' }})
    
