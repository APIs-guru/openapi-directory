from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import metricvalue
from . import rowdimensions


@dataclass_json
@dataclass
class CreativeStatusRow:
    bid_count: Optional[metricvalue.MetricValue] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bidCount' }})
    creative_status_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creativeStatusId' }})
    row_dimensions: Optional[rowdimensions.RowDimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowDimensions' }})
    
