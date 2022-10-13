from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accountassignmentoperationstatus


@dataclass_json
@dataclass
class CreateAccountAssignmentResponse:
    account_assignment_creation_status: Optional[accountassignmentoperationstatus.AccountAssignmentOperationStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountAssignmentCreationStatus' }})
    
