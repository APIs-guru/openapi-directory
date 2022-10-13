from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphasearchads360link


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListSearchAds360LinksResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    search_ads360_links: Optional[List[googleanalyticsadminv1alphasearchads360link.GoogleAnalyticsAdminV1alphaSearchAds360Link]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'searchAds360Links' }})
    
