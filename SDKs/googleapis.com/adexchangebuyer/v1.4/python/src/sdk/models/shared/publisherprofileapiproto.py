from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PublisherProfileAPIProto:
    audience: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audience') }})
    buyer_pitch_statement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerPitchStatement') }})
    direct_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directContact') }})
    exchange: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exchange') }})
    forecast_inventory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('forecastInventory') }})
    google_plus_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googlePlusLink') }})
    is_parent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isParent') }})
    is_published: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPublished') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoUrl') }})
    media_kit_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaKitLink') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overview') }})
    profile_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileId') }})
    programmatic_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programmaticContact') }})
    publisher_app_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherAppIds') }})
    publisher_apps: Optional[List[MobileApplication]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherApps') }})
    publisher_domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherDomains') }})
    publisher_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProfileId') }})
    publisher_provided_forecast: Optional[PublisherProvidedForecast] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherProvidedForecast') }})
    rate_card_info_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateCardInfoLink') }})
    sample_page_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplePageLink') }})
    seller: Optional[Seller] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seller') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    top_headlines: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topHeadlines') }})
    
