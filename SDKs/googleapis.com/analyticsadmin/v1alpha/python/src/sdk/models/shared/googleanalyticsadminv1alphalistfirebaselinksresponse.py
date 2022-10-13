from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphafirebaselink


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse:
    firebase_links: Optional[List[googleanalyticsadminv1alphafirebaselink.GoogleAnalyticsAdminV1alphaFirebaseLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firebaseLinks' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
