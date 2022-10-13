from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datapoint
from . import responseresourcemetrickey


@dataclass_json
@dataclass
class MetricKeyDataPoints:
    data_points: Optional[List[datapoint.DataPoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataPoints' }})
    key: Optional[responseresourcemetrickey.ResponseResourceMetricKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Key' }})
    
