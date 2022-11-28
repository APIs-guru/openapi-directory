from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScimGroupListEnterpriseResourcesMembers:
    dollar_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('$ref') }})
    display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ScimGroupListEnterpriseResourcesMeta:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModified') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    

@dataclass_json
@dataclass
class ScimGroupListEnterpriseResources:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    schemas: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    members: Optional[List[ScimGroupListEnterpriseResourcesMembers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    meta: Optional[ScimGroupListEnterpriseResourcesMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    

@dataclass_json
@dataclass
class ScimGroupListEnterprise:
    resources: List[ScimGroupListEnterpriseResources] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resources') }})
    items_per_page: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemsPerPage') }})
    schemas: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    start_index: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startIndex') }})
    total_results: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalResults') }})
    
