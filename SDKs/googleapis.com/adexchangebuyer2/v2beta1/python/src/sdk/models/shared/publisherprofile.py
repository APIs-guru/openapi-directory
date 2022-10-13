from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import publisherprofilemobileapplication
from . import seller


@dataclass_json
@dataclass
class PublisherProfile:
    audience_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audienceDescription' }})
    buyer_pitch_statement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buyerPitchStatement' }})
    direct_deals_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directDealsContact' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    google_plus_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googlePlusUrl' }})
    is_parent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isParent' }})
    logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logoUrl' }})
    media_kit_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaKitUrl' }})
    mobile_apps: Optional[List[publisherprofilemobileapplication.PublisherProfileMobileApplication]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileApps' }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overview' }})
    programmatic_deals_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'programmaticDealsContact' }})
    publisher_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherProfileId' }})
    rate_card_info_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateCardInfoUrl' }})
    sample_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samplePageUrl' }})
    seller: Optional[seller.Seller] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seller' }})
    top_headlines: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topHeadlines' }})
    
