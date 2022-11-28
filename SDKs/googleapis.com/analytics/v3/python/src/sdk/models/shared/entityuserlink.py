from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EntityUserLinkPermissionsInput:
    r"""EntityUserLinkPermissionsInput
    Permissions the user has for this entity.
    """
    
    local: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local') }})
    

@dataclass_json
@dataclass
class EntityUserLinkEntity:
    r"""EntityUserLinkEntity
    Entity for this link. It can be an account, a web property, or a view (profile).
    """
    
    account_ref: Optional[AccountRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountRef') }})
    profile_ref: Optional[ProfileRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profileRef') }})
    web_property_ref: Optional[WebPropertyRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webPropertyRef') }})
    

@dataclass_json
@dataclass
class EntityUserLinkPermissions:
    r"""EntityUserLinkPermissions
    Permissions the user has for this entity.
    """
    
    effective: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effective') }})
    local: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('local') }})
    

@dataclass_json
@dataclass
class EntityUserLinkInput:
    r"""EntityUserLinkInput
    JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
    """
    
    entity: Optional[EntityUserLinkEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    permissions: Optional[EntityUserLinkPermissionsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    user_ref: Optional[UserRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRef') }})
    

@dataclass_json
@dataclass
class EntityUserLink:
    r"""EntityUserLink
    JSON template for an Analytics Entity-User Link. Returns permissions that a user has for an entity.
    """
    
    entity: Optional[EntityUserLinkEntity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('entity') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    permissions: Optional[EntityUserLinkPermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('selfLink') }})
    user_ref: Optional[UserRef] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRef') }})
    
