from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import publisherprofilemobileapplication


@dataclass_json
@dataclass
class PublisherProfile:
    audience_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audienceDescription' }})
    direct_deals_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directDealsContact' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    is_parent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isParent' }})
    logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logoUrl' }})
    media_kit_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaKitUrl' }})
    mobile_apps: Optional[List[publisherprofilemobileapplication.PublisherProfileMobileApplication]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileApps' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overview' }})
    pitch_statement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pitchStatement' }})
    programmatic_deals_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'programmaticDealsContact' }})
    publisher_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherCode' }})
    sample_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'samplePageUrl' }})
    top_headlines: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topHeadlines' }})
    
