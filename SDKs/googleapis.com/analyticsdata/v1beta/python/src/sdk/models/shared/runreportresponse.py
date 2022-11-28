from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunReportResponse:
    r"""RunReportResponse
    The response report table corresponding to a request.
    """
    
    dimension_headers: Optional[List[DimensionHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionHeaders') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    maximums: Optional[List[Row]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maximums') }})
    metadata: Optional[ResponseMetaData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    metric_headers: Optional[List[MetricHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricHeaders') }})
    minimums: Optional[List[Row]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimums') }})
    property_quota: Optional[PropertyQuota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyQuota') }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCount') }})
    rows: Optional[List[Row]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    totals: Optional[List[Row]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totals') }})
    
