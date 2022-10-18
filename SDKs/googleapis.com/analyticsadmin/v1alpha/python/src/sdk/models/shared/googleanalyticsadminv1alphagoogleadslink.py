from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaGoogleAdsLink:
    ads_personalization_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adsPersonalizationEnabled' }})
    can_manage_clients: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'canManageClients' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    creator_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatorEmailAddress' }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
