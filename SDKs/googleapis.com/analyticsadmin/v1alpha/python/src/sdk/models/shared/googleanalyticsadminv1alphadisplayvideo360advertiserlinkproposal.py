from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput:
    r"""GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposalInput
    A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
    """
    
    ads_personalization_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adsPersonalizationEnabled') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    campaign_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignDataSharingEnabled') }})
    cost_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costDataSharingEnabled') }})
    validation_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationEmail') }})
    

@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal:
    r"""GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal
    A proposal for a link between a GA4 property and a Display & Video 360 advertiser. A proposal is converted to a DisplayVideo360AdvertiserLink once approved. Google Analytics admins approve inbound proposals while Display & Video 360 admins approve outbound proposals.
    """
    
    ads_personalization_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adsPersonalizationEnabled') }})
    advertiser_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserDisplayName') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    campaign_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignDataSharingEnabled') }})
    cost_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costDataSharingEnabled') }})
    link_proposal_status_details: Optional[GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkProposalStatusDetails') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    validation_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validationEmail') }})
    
