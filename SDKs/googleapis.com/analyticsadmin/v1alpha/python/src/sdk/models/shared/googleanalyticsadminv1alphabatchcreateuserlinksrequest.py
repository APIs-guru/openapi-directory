from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphacreateuserlinkrequest


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaBatchCreateUserLinksRequest:
    notify_new_users: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifyNewUsers' }})
    requests: Optional[List[googleanalyticsadminv1alphacreateuserlinkrequest.GoogleAnalyticsAdminV1alphaCreateUserLinkRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
