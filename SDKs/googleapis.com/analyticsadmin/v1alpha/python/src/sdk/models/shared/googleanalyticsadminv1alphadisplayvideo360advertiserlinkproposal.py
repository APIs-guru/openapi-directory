from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleanalyticsadminv1alphalinkproposalstatusdetails


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkProposal:
    ads_personalization_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adsPersonalizationEnabled' }})
    advertiser_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserDisplayName' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    campaign_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignDataSharingEnabled' }})
    cost_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costDataSharingEnabled' }})
    link_proposal_status_details: Optional[googleanalyticsadminv1alphalinkproposalstatusdetails.GoogleAnalyticsAdminV1alphaLinkProposalStatusDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkProposalStatusDetails' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    validation_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validationEmail' }})
    
