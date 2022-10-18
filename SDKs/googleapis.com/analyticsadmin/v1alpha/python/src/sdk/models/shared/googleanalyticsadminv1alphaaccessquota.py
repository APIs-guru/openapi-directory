from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaccessquotastatus
from . import googleanalyticsadminv1alphaaccessquotastatus
from . import googleanalyticsadminv1alphaaccessquotastatus
from . import googleanalyticsadminv1alphaaccessquotastatus
from . import googleanalyticsadminv1alphaaccessquotastatus


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessQuota:
    concurrent_requests: Optional[googleanalyticsadminv1alphaaccessquotastatus.GoogleAnalyticsAdminV1alphaAccessQuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concurrentRequests' }})
    server_errors_per_project_per_hour: Optional[googleanalyticsadminv1alphaaccessquotastatus.GoogleAnalyticsAdminV1alphaAccessQuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverErrorsPerProjectPerHour' }})
    tokens_per_day: Optional[googleanalyticsadminv1alphaaccessquotastatus.GoogleAnalyticsAdminV1alphaAccessQuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokensPerDay' }})
    tokens_per_hour: Optional[googleanalyticsadminv1alphaaccessquotastatus.GoogleAnalyticsAdminV1alphaAccessQuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokensPerHour' }})
    tokens_per_project_per_hour: Optional[googleanalyticsadminv1alphaaccessquotastatus.GoogleAnalyticsAdminV1alphaAccessQuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokensPerProjectPerHour' }})
    
