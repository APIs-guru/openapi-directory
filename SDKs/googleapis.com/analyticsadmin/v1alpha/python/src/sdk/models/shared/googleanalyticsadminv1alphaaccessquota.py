from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAccessQuota:
    r"""GoogleAnalyticsAdminV1alphaAccessQuota
    Current state of all quotas for this Analytics property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
    """
    
    concurrent_requests: Optional[GoogleAnalyticsAdminV1alphaAccessQuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrentRequests') }})
    server_errors_per_project_per_hour: Optional[GoogleAnalyticsAdminV1alphaAccessQuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverErrorsPerProjectPerHour') }})
    tokens_per_day: Optional[GoogleAnalyticsAdminV1alphaAccessQuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokensPerDay') }})
    tokens_per_hour: Optional[GoogleAnalyticsAdminV1alphaAccessQuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokensPerHour') }})
    tokens_per_project_per_hour: Optional[GoogleAnalyticsAdminV1alphaAccessQuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokensPerProjectPerHour') }})
    
