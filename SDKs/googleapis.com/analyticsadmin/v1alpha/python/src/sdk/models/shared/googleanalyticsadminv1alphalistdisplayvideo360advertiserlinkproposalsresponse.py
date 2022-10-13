from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphadisplayvideo360advertiserlinkproposal


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse:
    display_video360_advertiser_link_proposals: Optional[List[googleanalyticsadminv1alphadisplayvideo360advertiserlinkproposal.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayVideo360AdvertiserLinkProposals' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
