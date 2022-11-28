from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScimUserListEnterpriseResourcesEmails:
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primary') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ScimUserListEnterpriseResourcesGroups:
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ScimUserListEnterpriseResourcesMeta:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModified') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    

@dataclass_json
@dataclass
class ScimUserListEnterpriseResourcesName:
    family_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('familyName') }})
    given_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('givenName') }})
    

@dataclass_json
@dataclass
class ScimUserListEnterpriseResources:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    schemas: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    emails: Optional[List[ScimUserListEnterpriseResourcesEmails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emails') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    groups: Optional[List[ScimUserListEnterpriseResourcesGroups]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    meta: Optional[ScimUserListEnterpriseResourcesMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    name: Optional[ScimUserListEnterpriseResourcesName] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    

@dataclass_json
@dataclass
class ScimUserListEnterprise:
    resources: List[ScimUserListEnterpriseResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    items_per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemsPerPage') }})
    schemas: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    start_index: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    total_results: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    
