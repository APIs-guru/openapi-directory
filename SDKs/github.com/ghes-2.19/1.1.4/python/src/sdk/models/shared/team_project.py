from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TeamProjectPermissions:
    admin: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('admin') }})
    read: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    write: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('write') }})
    

@dataclass_json
@dataclass
class TeamProject:
    r"""TeamProject
    A team's access to a project.
    """
    
    body: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    columns_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('columns_url') }})
    created_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    creator: SimpleUser = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    number: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    owner_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_url') }})
    permissions: TeamProjectPermissions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    state: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    updated_at: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    organization_permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization_permission') }})
    private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    
