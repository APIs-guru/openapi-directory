from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaccount


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaProvisionAccountTicketRequest:
    account: Optional[googleanalyticsadminv1alphaaccount.GoogleAnalyticsAdminV1alphaAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    redirect_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'redirectUri' }})
    
