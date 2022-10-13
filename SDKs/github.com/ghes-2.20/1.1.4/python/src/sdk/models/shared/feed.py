from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import link_with_type
from . import link_with_type
from . import link_with_type
from . import link_with_type
from . import link_with_type
from . import link_with_type
from . import link_with_type
from . import link_with_type


@dataclass_json
@dataclass
class FeedLinks:
    current_user: Optional[link_with_type.LinkWithType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user' }})
    current_user_actor: Optional[link_with_type.LinkWithType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_actor' }})
    current_user_organization: Optional[link_with_type.LinkWithType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_organization' }})
    current_user_organizations: Optional[List[link_with_type.LinkWithType]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_organizations' }})
    current_user_public: Optional[link_with_type.LinkWithType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_public' }})
    security_advisories: Optional[link_with_type.LinkWithType] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'security_advisories' }})
    timeline: link_with_type.LinkWithType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeline' }})
    user: link_with_type.LinkWithType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

@dataclass_json
@dataclass
class Feed:
    links: FeedLinks = field(default=None, metadata={'dataclasses_json': { 'field_name': '_links' }})
    current_user_actor_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_actor_url' }})
    current_user_organization_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_organization_url' }})
    current_user_organization_urls: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_organization_urls' }})
    current_user_public_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_public_url' }})
    current_user_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_user_url' }})
    timeline_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeline_url' }})
    user_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_url' }})
    
