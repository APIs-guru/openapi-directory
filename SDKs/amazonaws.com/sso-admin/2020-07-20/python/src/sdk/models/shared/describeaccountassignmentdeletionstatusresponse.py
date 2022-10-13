from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accountassignmentoperationstatus


@dataclass_json
@dataclass
class DescribeAccountAssignmentDeletionStatusResponse:
    account_assignment_deletion_status: Optional[accountassignmentoperationstatus.AccountAssignmentOperationStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountAssignmentDeletionStatus' }})
    
