from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RoleAssignment:
    assigned_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignedTo' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgUnitId' }})
    role_assignment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleAssignmentId' }})
    role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleId' }})
    scope_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopeType' }})
    
