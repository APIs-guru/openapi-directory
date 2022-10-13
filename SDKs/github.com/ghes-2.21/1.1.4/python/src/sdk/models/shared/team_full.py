from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import organization_full


@dataclass_json
@dataclass
class TeamFullParentTeamSimple:
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ldap_dn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_dn' }})
    members_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    permission: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    privacy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    repositories_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories_url' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class TeamFullPrivacyEnum(str, Enum):
    CLOSED = "closed"
    SECRET = "secret"


@dataclass_json
@dataclass
class TeamFull:
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    html_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'html_url' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ldap_dn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_dn' }})
    members_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_count' }})
    members_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members_url' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    node_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'node_id' }})
    organization: organization_full.OrganizationFull = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organization' }})
    parent: Optional[TeamFullParentTeamSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    permission: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    privacy: Optional[TeamFullPrivacyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privacy' }})
    repos_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repos_count' }})
    repositories_url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'repositories_url' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
