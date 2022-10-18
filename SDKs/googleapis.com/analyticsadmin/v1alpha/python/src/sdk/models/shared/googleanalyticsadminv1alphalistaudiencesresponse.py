from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphaaudience


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListAudiencesResponse:
    audiences: Optional[List[googleanalyticsadminv1alphaaudience.GoogleAnalyticsAdminV1alphaAudience]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audiences' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
