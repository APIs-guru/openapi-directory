from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphacustommetric


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListCustomMetricsResponse:
    custom_metrics: Optional[List[googleanalyticsadminv1alphacustommetric.GoogleAnalyticsAdminV1alphaCustomMetric]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customMetrics' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
