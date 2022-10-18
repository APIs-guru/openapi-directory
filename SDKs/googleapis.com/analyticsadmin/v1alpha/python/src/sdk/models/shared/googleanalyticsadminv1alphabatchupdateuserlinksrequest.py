from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaupdateuserlinkrequest


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaBatchUpdateUserLinksRequest:
    requests: Optional[List[googleanalyticsadminv1alphaupdateuserlinkrequest.GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
