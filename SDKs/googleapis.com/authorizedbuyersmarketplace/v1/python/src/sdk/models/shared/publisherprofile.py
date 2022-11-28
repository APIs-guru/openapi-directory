from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PublisherProfile:
    r"""PublisherProfile
    The values in the publisher profile are supplied by the publisher. All fields are not filterable unless stated otherwise.
    """
    
    audience_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audienceDescription') }})
    direct_deals_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directDealsContact') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    is_parent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isParent') }})
    logo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoUrl') }})
    media_kit_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaKitUrl') }})
    mobile_apps: Optional[List[PublisherProfileMobileApplication]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileApps') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    overview: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overview') }})
    pitch_statement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitchStatement') }})
    programmatic_deals_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('programmaticDealsContact') }})
    publisher_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publisherCode') }})
    sample_page_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samplePageUrl') }})
    top_headlines: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topHeadlines') }})
    
