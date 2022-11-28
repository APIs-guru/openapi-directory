from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunPivotReportResponse:
    r"""RunPivotReportResponse
    The response pivot report table corresponding to a pivot request.
    """
    
    aggregates: Optional[List[Row]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('aggregates') }})
    dimension_headers: Optional[List[DimensionHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionHeaders') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    metadata: Optional[ResponseMetaData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    metric_headers: Optional[List[MetricHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricHeaders') }})
    pivot_headers: Optional[List[PivotHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivotHeaders') }})
    property_quota: Optional[PropertyQuota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyQuota') }})
    rows: Optional[List[Row]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
