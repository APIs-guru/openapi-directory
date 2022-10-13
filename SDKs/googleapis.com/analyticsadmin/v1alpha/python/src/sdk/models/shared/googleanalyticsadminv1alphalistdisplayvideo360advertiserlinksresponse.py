from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphadisplayvideo360advertiserlink


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinksResponse:
    display_video360_advertiser_links: Optional[List[googleanalyticsadminv1alphadisplayvideo360advertiserlink.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayVideo360AdvertiserLinks' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
