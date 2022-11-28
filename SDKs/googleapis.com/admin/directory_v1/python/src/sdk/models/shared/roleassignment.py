from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RoleAssignment:
    r"""RoleAssignment
    Defines an assignment of a role.
    """
    
    assigned_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedTo') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    org_unit_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orgUnitId') }})
    role_assignment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleAssignmentId') }})
    role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleId') }})
    scope_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopeType') }})
    
