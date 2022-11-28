from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RunPivotReportRequest:
    r"""RunPivotReportRequest
    The request to generate a pivot report.
    """
    
    cohort_spec: Optional[CohortSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cohortSpec') }})
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currencyCode') }})
    date_ranges: Optional[List[DateRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRanges') }})
    dimension_filter: Optional[FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilter') }})
    dimensions: Optional[List[Dimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    keep_empty_rows: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepEmptyRows') }})
    metric_filter: Optional[FilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricFilter') }})
    metrics: Optional[List[Metric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    pivots: Optional[List[Pivot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pivots') }})
    property: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('property') }})
    return_property_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnPropertyQuota') }})
    
