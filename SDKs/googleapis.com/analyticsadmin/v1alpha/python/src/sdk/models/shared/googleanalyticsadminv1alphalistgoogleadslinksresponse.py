from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphagoogleadslink


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListGoogleAdsLinksResponse:
    google_ads_links: Optional[List[googleanalyticsadminv1alphagoogleadslink.GoogleAnalyticsAdminV1alphaGoogleAdsLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleAdsLinks' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
