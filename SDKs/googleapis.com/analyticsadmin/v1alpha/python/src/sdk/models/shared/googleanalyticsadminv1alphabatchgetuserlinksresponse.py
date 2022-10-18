from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphauserlink


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaBatchGetUserLinksResponse:
    user_links: Optional[List[googleanalyticsadminv1alphauserlink.GoogleAnalyticsAdminV1alphaUserLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLinks' }})
    
