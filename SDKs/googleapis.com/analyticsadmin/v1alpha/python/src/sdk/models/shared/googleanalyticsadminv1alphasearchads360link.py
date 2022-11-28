from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaSearchAds360LinkInput:
    r"""GoogleAnalyticsAdminV1alphaSearchAds360LinkInput
    A link between a GA4 property and a Search Ads 360 entity.
    """
    
    ads_personalization_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adsPersonalizationEnabled') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    campaign_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignDataSharingEnabled') }})
    cost_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costDataSharingEnabled') }})
    site_stats_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteStatsSharingEnabled') }})
    

@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaSearchAds360Link:
    r"""GoogleAnalyticsAdminV1alphaSearchAds360Link
    A link between a GA4 property and a Search Ads 360 entity.
    """
    
    ads_personalization_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adsPersonalizationEnabled') }})
    advertiser_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserDisplayName') }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advertiserId') }})
    campaign_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaignDataSharingEnabled') }})
    cost_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('costDataSharingEnabled') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site_stats_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('siteStatsSharingEnabled') }})
    
