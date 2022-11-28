from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse:
    r"""GoogleAnalyticsAdminV1alphaApproveDisplayVideo360AdvertiserLinkProposalResponse
    Response message for ApproveDisplayVideo360AdvertiserLinkProposal RPC.
    """
    
    display_video360_advertiser_link: Optional[GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayVideo360AdvertiserLink') }})
    
