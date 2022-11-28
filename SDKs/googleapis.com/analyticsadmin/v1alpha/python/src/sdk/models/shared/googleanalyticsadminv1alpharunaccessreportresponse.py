from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaRunAccessReportResponse:
    r"""GoogleAnalyticsAdminV1alphaRunAccessReportResponse
    The customized Data Access Record Report response.
    """
    
    dimension_headers: Optional[List[GoogleAnalyticsAdminV1alphaAccessDimensionHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dimensionHeaders') }})
    metric_headers: Optional[List[GoogleAnalyticsAdminV1alphaAccessMetricHeader]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricHeaders') }})
    quota: Optional[GoogleAnalyticsAdminV1alphaAccessQuota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quota') }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowCount') }})
    rows: Optional[List[GoogleAnalyticsAdminV1alphaAccessRow]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    
