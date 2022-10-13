from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountref
from . import profileref
from . import webpropertyref
from . import userref


@dataclass_json
@dataclass
class EntityUserLinkEntity:
    account_ref: Optional[accountref.AccountRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountRef' }})
    profile_ref: Optional[profileref.ProfileRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profileRef' }})
    web_property_ref: Optional[webpropertyref.WebPropertyRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webPropertyRef' }})
    

@dataclass_json
@dataclass
class EntityUserLinkPermissions:
    effective: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effective' }})
    local: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'local' }})
    

@dataclass_json
@dataclass
class EntityUserLink:
    entity: Optional[EntityUserLinkEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entity' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    permissions: Optional[EntityUserLinkPermissions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    self_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'selfLink' }})
    user_ref: Optional[userref.UserRef] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRef' }})
    
