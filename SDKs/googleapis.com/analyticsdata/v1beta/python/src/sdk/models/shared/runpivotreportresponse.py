from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import row
from . import dimensionheader
from . import responsemetadata
from . import metricheader
from . import pivotheader
from . import propertyquota
from . import row


@dataclass_json
@dataclass
class RunPivotReportResponse:
    aggregates: Optional[List[row.Row]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregates' }})
    dimension_headers: Optional[List[dimensionheader.DimensionHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionHeaders' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    metadata: Optional[responsemetadata.ResponseMetaData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    metric_headers: Optional[List[metricheader.MetricHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricHeaders' }})
    pivot_headers: Optional[List[pivotheader.PivotHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pivotHeaders' }})
    property_quota: Optional[propertyquota.PropertyQuota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyQuota' }})
    rows: Optional[List[row.Row]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
