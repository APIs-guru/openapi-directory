from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import segmentdimensionfilter
from . import segmentmetricfilter


@dataclass_json
@dataclass
class SegmentFilterClause:
    dimension_filter: Optional[segmentdimensionfilter.SegmentDimensionFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionFilter' }})
    metric_filter: Optional[segmentmetricfilter.SegmentMetricFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricFilter' }})
    not_: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'not' }})
    
