from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FeedLinks:
    timeline: LinkWithType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeline') }})
    user: LinkWithType = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    current_user: Optional[LinkWithType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user') }})
    current_user_actor: Optional[LinkWithType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_actor') }})
    current_user_organization: Optional[LinkWithType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_organization') }})
    current_user_organizations: Optional[List[LinkWithType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_organizations') }})
    current_user_public: Optional[LinkWithType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_public') }})
    security_advisories: Optional[LinkWithType] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('security_advisories') }})
    

@dataclass_json
@dataclass
class Feed:
    r"""Feed
    Feed
    """
    
    links: FeedLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    timeline_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeline_url') }})
    user_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_url') }})
    current_user_actor_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_actor_url') }})
    current_user_organization_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_organization_url') }})
    current_user_organization_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_organization_urls') }})
    current_user_public_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_public_url') }})
    current_user_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_user_url') }})
    security_advisories_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('security_advisories_url') }})
    
