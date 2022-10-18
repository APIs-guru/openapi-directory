from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaudituserlink


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaAuditUserLinksResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    user_links: Optional[List[googleanalyticsadminv1alphaaudituserlink.GoogleAnalyticsAdminV1alphaAuditUserLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLinks' }})
    
