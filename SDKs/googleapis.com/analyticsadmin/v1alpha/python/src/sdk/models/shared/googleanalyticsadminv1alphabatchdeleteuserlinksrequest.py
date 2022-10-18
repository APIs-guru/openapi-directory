from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphadeleteuserlinkrequest


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaBatchDeleteUserLinksRequest:
    requests: Optional[List[googleanalyticsadminv1alphadeleteuserlinkrequest.GoogleAnalyticsAdminV1alphaDeleteUserLinkRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
