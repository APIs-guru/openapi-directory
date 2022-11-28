from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReportRequestSamplingLevelEnum(str, Enum):
    SAMPLING_UNSPECIFIED = "SAMPLING_UNSPECIFIED"
    DEFAULT = "DEFAULT"
    SMALL = "SMALL"
    LARGE = "LARGE"


@dataclass_json
@dataclass
class ReportRequest:
    r"""ReportRequest
    The main request class which specifies the Reporting API request.
    """
    
    cohort_group: Optional[CohortGroup] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cohortGroup') }})
    date_ranges: Optional[List[DateRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRanges') }})
    dimension_filter_clauses: Optional[List[DimensionFilterClause]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilterClauses') }})
    dimensions: Optional[List[Dimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    filters_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filtersExpression') }})
    hide_totals: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideTotals') }})
    hide_value_ranges: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hideValueRanges') }})
    include_empty_rows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeEmptyRows') }})
    metric_filter_clauses: Optional[List[MetricFilterClause]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricFilterClauses') }})
    metrics: Optional[List[Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    order_bys: Optional[List[OrderBy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBys') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    pivots: Optional[List[Pivot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivots') }})
    sampling_level: Optional[ReportRequestSamplingLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplingLevel') }})
    segments: Optional[List[Segment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    view_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewId') }})
    
