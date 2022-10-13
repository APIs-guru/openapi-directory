from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaccount


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListAccountsResponse:
    accounts: Optional[List[googleanalyticsadminv1alphaaccount.GoogleAnalyticsAdminV1alphaAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
