from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaccountsummary


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListAccountSummariesResponse:
    account_summaries: Optional[List[googleanalyticsadminv1alphaaccountsummary.GoogleAnalyticsAdminV1alphaAccountSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountSummaries' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
