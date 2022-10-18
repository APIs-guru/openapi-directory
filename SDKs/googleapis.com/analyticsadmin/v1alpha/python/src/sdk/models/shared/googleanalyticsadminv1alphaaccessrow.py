from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaccessdimensionvalue
from . import googleanalyticsadminv1alphaaccessmetricvalue


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessRow:
    dimension_values: Optional[List[googleanalyticsadminv1alphaaccessdimensionvalue.GoogleAnalyticsAdminV1alphaAccessDimensionValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimensionValues' }})
    metric_values: Optional[List[googleanalyticsadminv1alphaaccessmetricvalue.GoogleAnalyticsAdminV1alphaAccessMetricValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricValues' }})
    
