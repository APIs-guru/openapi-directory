from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScimEnterpriseGroupMembers:
    dollar_ref: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '$ref' }})
    display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

@dataclass_json
@dataclass
class ScimEnterpriseGroupMeta:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    last_modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified' }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    

@dataclass_json
@dataclass
class ScimEnterpriseGroup:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    external_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalId' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    members: Optional[List[ScimEnterpriseGroupMembers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    meta: Optional[ScimEnterpriseGroupMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    schemas: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemas' }})
    
