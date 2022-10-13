from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScimUserListEnterpriseResourcesEmails:
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ScimUserListEnterpriseResourcesGroups:
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ScimUserListEnterpriseResourcesMeta:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    

@dataclass_json
@dataclass
class ScimUserListEnterpriseResourcesName:
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'familyName' }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'givenName' }})
    

@dataclass_json
@dataclass
class ScimUserListEnterpriseResources:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    emails: Optional[List[ScimUserListEnterpriseResourcesEmails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emails' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    groups: Optional[List[ScimUserListEnterpriseResourcesGroups]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    meta: Optional[ScimUserListEnterpriseResourcesMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    name: Optional[ScimUserListEnterpriseResourcesName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    schemas: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    

@dataclass_json
@dataclass
class ScimUserListEnterprise:
    resources: List[ScimUserListEnterpriseResources] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Resources' }})
    items_per_page: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemsPerPage' }})
    schemas: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    start_index: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    total_results: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalResults' }})
    
