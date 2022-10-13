from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaccessorderbydimensionorderby
from . import googleanalyticsadminv1alphaaccessorderbymetricorderby


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessOrderBy:
    desc: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desc' }})
    dimension: Optional[googleanalyticsadminv1alphaaccessorderbydimensionorderby.GoogleAnalyticsAdminV1alphaAccessOrderByDimensionOrderBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dimension' }})
    metric: Optional[googleanalyticsadminv1alphaaccessorderbymetricorderby.GoogleAnalyticsAdminV1alphaAccessOrderByMetricOrderBy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metric' }})
    
