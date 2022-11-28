from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TeamFullTeamSimple:
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
    
class TeamFullPrivacyEnum(str, Enum):
    CLOSED = "closed"
    SECRET = "secret"


@dataclass_json
@dataclass
class TeamFull:
    r"""TeamFull
    Groups of organization members that gives permissions on specified repositories.
    """
    
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    html_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('html_url') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    members_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_count') }})
    members_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('members_url') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    node_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('node_id') }})
    organization: OrganizationFull = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('organization') }})
    permission: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    repos_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repos_count') }})
    repositories_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('repositories_url') }})
    slug: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    ldap_dn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ldap_dn') }})
    parent: Optional[TeamFullTeamSimple] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent') }})
    privacy: Optional[TeamFullPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('privacy') }})
    
