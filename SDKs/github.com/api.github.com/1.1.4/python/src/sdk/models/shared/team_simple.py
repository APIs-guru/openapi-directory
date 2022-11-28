from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TeamSimple:
    r"""TeamSimple
    Groups of organization members that gives permissions on specified repositories.
    """
    
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    members_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_url') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    permission: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    repositories_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories_url') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    ldap_dn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_dn') }})
    privacy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    
