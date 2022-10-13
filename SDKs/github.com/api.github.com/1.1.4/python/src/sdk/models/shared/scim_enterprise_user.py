from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScimEnterpriseUserEmails:
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ScimEnterpriseUserGroups:
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ScimEnterpriseUserMeta:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    

@dataclass_json
@dataclass
class ScimEnterpriseUserName:
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyName' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'givenName' }})
    

@dataclass_json
@dataclass
class ScimEnterpriseUser:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    emails: Optional[List[ScimEnterpriseUserEmails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    groups: Optional[List[ScimEnterpriseUserGroups]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    meta: Optional[ScimEnterpriseUserMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    name: Optional[ScimEnterpriseUserName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schemas: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    
