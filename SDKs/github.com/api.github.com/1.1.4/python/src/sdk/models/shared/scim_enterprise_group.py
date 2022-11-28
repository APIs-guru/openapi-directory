from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScimEnterpriseGroupMembers:
    dollar_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('$ref') }})
    display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ScimEnterpriseGroupMeta:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModified') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceType') }})
    

@dataclass_json
@dataclass
class ScimEnterpriseGroup:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    schemas: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemas') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalId') }})
    members: Optional[List[ScimEnterpriseGroupMembers]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    meta: Optional[ScimEnterpriseGroupMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
