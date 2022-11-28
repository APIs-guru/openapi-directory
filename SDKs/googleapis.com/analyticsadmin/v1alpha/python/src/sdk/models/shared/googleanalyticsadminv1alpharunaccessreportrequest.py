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
class GoogleAnalyticsAdminV1alphaRunAccessReportRequest:
    r"""GoogleAnalyticsAdminV1alphaRunAccessReportRequest
    The request for a Data Access Record Report.
    """
    
    date_ranges: Optional[List[GoogleAnalyticsAdminV1alphaAccessDateRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRanges') }})
    dimension_filter: Optional[GoogleAnalyticsAdminV1alphaAccessFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionFilter') }})
    dimensions: Optional[List[GoogleAnalyticsAdminV1alphaAccessDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensions') }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    metric_filter: Optional[GoogleAnalyticsAdminV1alphaAccessFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricFilter') }})
    metrics: Optional[List[GoogleAnalyticsAdminV1alphaAccessMetric]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    order_bys: Optional[List[GoogleAnalyticsAdminV1alphaAccessOrderBy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBys') }})
    return_entity_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnEntityQuota') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    
