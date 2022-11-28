from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaGoogleAdsLink:
    r"""GoogleAnalyticsAdminV1alphaGoogleAdsLink
    A link between a GA4 property and a Google Ads account.
    """
    
    ads_personalization_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adsPersonalizationEnabled') }})
    can_manage_clients: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canManageClients') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    creator_email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creatorEmailAddress') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    

@dataclass_json
@dataclass
class GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput:
    r"""GoogleAnalyticsAdminV1alphaGoogleAdsLinkInput
    A link between a GA4 property and a Google Ads account.
    """
    
    ads_personalization_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adsPersonalizationEnabled') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    
