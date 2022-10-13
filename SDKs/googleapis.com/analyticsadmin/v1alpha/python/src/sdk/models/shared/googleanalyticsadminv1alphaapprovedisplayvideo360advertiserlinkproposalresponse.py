from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphadisplayvideo360advertiserlink


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse:
    display_video360_advertiser_link: Optional[googleanalyticsadminv1alphadisplayvideo360advertiserlink.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayVideo360AdvertiserLink' }})
    
