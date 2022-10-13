from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import metricheaderentry
from . import pivotheader


@dataclass_json
@dataclass
class MetricHeader:
    metric_header_entries: Optional[List[metricheaderentry.MetricHeaderEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricHeaderEntries' }})
    pivot_headers: Optional[List[pivotheader.PivotHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pivotHeaders' }})
    
