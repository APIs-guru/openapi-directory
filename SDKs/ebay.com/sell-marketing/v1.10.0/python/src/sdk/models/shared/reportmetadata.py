from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionmetadata
from . import metricmetadata


@dataclass_json
@dataclass
class ReportMetadata:
    dimension_metadata: Optional[List[dimensionmetadata.DimensionMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionMetadata' }})
    max_number_of_dimensions_to_request: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxNumberOfDimensionsToRequest' }})
    max_number_of_metrics_to_request: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxNumberOfMetricsToRequest' }})
    metric_metadata: Optional[List[metricmetadata.MetricMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricMetadata' }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportType' }})
    
