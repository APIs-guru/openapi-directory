from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensioncompatibility
from . import metriccompatibility


@dataclass_json
@dataclass
class CheckCompatibilityResponse:
    dimension_compatibilities: Optional[List[dimensioncompatibility.DimensionCompatibility]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionCompatibilities' }})
    metric_compatibilities: Optional[List[metriccompatibility.MetricCompatibility]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricCompatibilities' }})
    
