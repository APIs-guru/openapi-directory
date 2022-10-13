from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaccessdaterange
from . import googleanalyticsadminv1alphaaccessfilterexpression
from . import googleanalyticsadminv1alphaaccessdimension
from . import googleanalyticsadminv1alphaaccessfilterexpression
from . import googleanalyticsadminv1alphaaccessmetric
from . import googleanalyticsadminv1alphaaccessorderby


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaRunAccessReportRequest:
    date_ranges: Optional[List[googleanalyticsadminv1alphaaccessdaterange.GoogleAnalyticsAdminV1alphaAccessDateRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateRanges' }})
    dimension_filter: Optional[googleanalyticsadminv1alphaaccessfilterexpression.GoogleAnalyticsAdminV1alphaAccessFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionFilter' }})
    dimensions: Optional[List[googleanalyticsadminv1alphaaccessdimension.GoogleAnalyticsAdminV1alphaAccessDimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensions' }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    metric_filter: Optional[googleanalyticsadminv1alphaaccessfilterexpression.GoogleAnalyticsAdminV1alphaAccessFilterExpression] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricFilter' }})
    metrics: Optional[List[googleanalyticsadminv1alphaaccessmetric.GoogleAnalyticsAdminV1alphaAccessMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'offset' }})
    order_bys: Optional[List[googleanalyticsadminv1alphaaccessorderby.GoogleAnalyticsAdminV1alphaAccessOrderBy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBys' }})
    return_entity_quota: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnEntityQuota' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    
