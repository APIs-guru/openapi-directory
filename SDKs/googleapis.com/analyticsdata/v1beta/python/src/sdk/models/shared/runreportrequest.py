from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RunReportRequestMetricAggregationsEnum(str, Enum):
    METRIC_AGGREGATION_UNSPECIFIED = "METRIC_AGGREGATION_UNSPECIFIED"
    TOTAL = "TOTAL"
    MINIMUM = "MINIMUM"
    MAXIMUM = "MAXIMUM"
    COUNT = "COUNT"


@dataclass_json
@dataclass
class RunReportRequest:
    r"""RunReportRequest
    The request to generate a report.
    """
    
    cohort_spec: Optional[CohortSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cohortSpec') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    date_ranges: Optional[List[DateRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRanges') }})
    dimension_filter: Optional[FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilter') }})
    dimensions: Optional[List[Dimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    keep_empty_rows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepEmptyRows') }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    metric_aggregations: Optional[List[RunReportRequestMetricAggregationsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricAggregations') }})
    metric_filter: Optional[FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricFilter') }})
    metrics: Optional[List[Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    order_bys: Optional[List[OrderBy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBys') }})
    property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    return_property_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPropertyQuota') }})
    
