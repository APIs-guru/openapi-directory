from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetricInfo:
    metric_dimensions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricDimensions' }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    metric_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricNamespace' }})
    metric_statistic_recommendation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricStatisticRecommendation' }})
    
