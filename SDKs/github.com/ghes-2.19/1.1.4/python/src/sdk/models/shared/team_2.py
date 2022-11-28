from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Team2Parent:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    html_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    members_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_url') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    privacy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    repositories_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories_url') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class Team2:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    members_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_url') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    parent: Optional[Team2Parent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    privacy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    repositories_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories_url') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
