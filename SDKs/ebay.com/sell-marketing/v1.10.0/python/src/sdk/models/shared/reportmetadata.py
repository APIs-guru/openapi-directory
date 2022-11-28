from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportMetadata:
    r"""ReportMetadata
    This type defines the fields included in the report.
    """
    
    dimension_metadata: Optional[List[DimensionMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionMetadata') }})
    max_number_of_dimensions_to_request: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNumberOfDimensionsToRequest') }})
    max_number_of_metrics_to_request: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxNumberOfMetricsToRequest') }})
    metric_metadata: Optional[List[MetricMetadata]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricMetadata') }})
    report_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportType') }})
    
