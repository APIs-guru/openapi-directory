from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink:
    ads_personalization_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adsPersonalizationEnabled' }})
    advertiser_display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserDisplayName' }})
    advertiser_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserId' }})
    campaign_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaignDataSharingEnabled' }})
    cost_data_sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'costDataSharingEnabled' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
