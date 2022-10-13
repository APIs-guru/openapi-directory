from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaccessdimensionheader
from . import googleanalyticsadminv1alphaaccessmetricheader
from . import googleanalyticsadminv1alphaaccessquota
from . import googleanalyticsadminv1alphaaccessrow


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaRunAccessReportResponse:
    dimension_headers: Optional[List[googleanalyticsadminv1alphaaccessdimensionheader.GoogleAnalyticsAdminV1alphaAccessDimensionHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionHeaders' }})
    metric_headers: Optional[List[googleanalyticsadminv1alphaaccessmetricheader.GoogleAnalyticsAdminV1alphaAccessMetricHeader]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricHeaders' }})
    quota: Optional[googleanalyticsadminv1alphaaccessquota.GoogleAnalyticsAdminV1alphaAccessQuota] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quota' }})
    row_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowCount' }})
    rows: Optional[List[googleanalyticsadminv1alphaaccessrow.GoogleAnalyticsAdminV1alphaAccessRow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rows' }})
    
