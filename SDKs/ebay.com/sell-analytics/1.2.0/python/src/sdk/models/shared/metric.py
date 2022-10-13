from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metricbenchmark
from . import metricdistribution


@dataclass_json
@dataclass
class Metric:
    benchmark: Optional[metricbenchmark.MetricBenchmark] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'benchmark' }})
    distributions: Optional[List[metricdistribution.MetricDistribution]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distributions' }})
    metric_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricKey' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
