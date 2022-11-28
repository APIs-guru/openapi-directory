from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink:
    r"""GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink
    A link between a GA4 property and a Display & Video 360 advertiser.
    """
    
    ads_personalization_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adsPersonalizationEnabled') }})
    advertiser_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserDisplayName') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    campaign_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignDataSharingEnabled') }})
    cost_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costDataSharingEnabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput:
    r"""GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput
    A link between a GA4 property and a Display & Video 360 advertiser.
    """
    
    ads_personalization_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adsPersonalizationEnabled') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    campaign_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignDataSharingEnabled') }})
    cost_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costDataSharingEnabled') }})
    
