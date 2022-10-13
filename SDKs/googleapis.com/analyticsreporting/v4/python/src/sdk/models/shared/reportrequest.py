from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import cohortgroup
from . import daterange
from . import dimensionfilterclause
from . import dimension
from . import metricfilterclause
from . import metric
from . import orderby
from . import pivot
from . import segment

class ReportRequestSamplingLevelEnum(str, Enum):
    SAMPLING_UNSPECIFIED = "SAMPLING_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    SMALL = "SMALL"
    LARGE = "LARGE"


@dataclass_json
@dataclass
class ReportRequest:
    cohort_group: Optional[cohortgroup.CohortGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cohortGroup' }})
    date_ranges: Optional[List[daterange.DateRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRanges' }})
    dimension_filter_clauses: Optional[List[dimensionfilterclause.DimensionFilterClause]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionFilterClauses' }})
    dimensions: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    filters_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filtersExpression' }})
    hide_totals: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideTotals' }})
    hide_value_ranges: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hideValueRanges' }})
    include_empty_rows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeEmptyRows' }})
    metric_filter_clauses: Optional[List[metricfilterclause.MetricFilterClause]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricFilterClauses' }})
    metrics: Optional[List[metric.Metric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    order_bys: Optional[List[orderby.OrderBy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBys' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    pivots: Optional[List[pivot.Pivot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pivots' }})
    sampling_level: Optional[ReportRequestSamplingLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samplingLevel' }})
    segments: Optional[List[segment.Segment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    view_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewId' }})
    
