from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dimensionheader
from . import row
from . import metricheader
from . import row
from . import propertyquota
from . import row
from . import row


@dataclass_json
@dataclass
class RunRealtimeReportResponse:
    dimension_headers: Optional[List[dimensionheader.DimensionHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionHeaders' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    maximums: Optional[List[row.Row]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximums' }})
    metric_headers: Optional[List[metricheader.MetricHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricHeaders' }})
    minimums: Optional[List[row.Row]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimums' }})
    property_quota: Optional[propertyquota.PropertyQuota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyQuota' }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowCount' }})
    rows: Optional[List[row.Row]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    totals: Optional[List[row.Row]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totals' }})
    
