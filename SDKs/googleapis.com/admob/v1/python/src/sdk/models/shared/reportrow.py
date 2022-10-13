from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import reportrowdimensionvalue
from . import reportrowmetricvalue


@dataclass_json
@dataclass
class ReportRow:
    dimension_values: Optional[dict[str, reportrowdimensionvalue.ReportRowDimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionValues' }})
    metric_values: Optional[dict[str, reportrowmetricvalue.ReportRowMetricValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricValues' }})
    
