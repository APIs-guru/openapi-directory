from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import metricvalue
from . import rowdimensions


@dataclass_json
@dataclass
class FilteredBidDetailRow:
    bid_count: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidCount' }})
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    detail_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailId' }})
    row_dimensions: Optional[rowdimensions.RowDimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowDimensions' }})
    
