from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphauserlink


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaUpdateUserLinkRequest:
    user_link: Optional[googleanalyticsadminv1alphauserlink.GoogleAnalyticsAdminV1alphaUserLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLink' }})
    
