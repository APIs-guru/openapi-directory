from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse:
    r"""GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse
    Response message for ListDisplayVideo360AdvertiserLinkProposals RPC.
    """
    
    display_video360_advertiser_link_proposals: Optional[List[GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayVideo360AdvertiserLinkProposals') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
