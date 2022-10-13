from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountassignmentoperationstatusmetadata


@dataclass_json
@dataclass
class ListAccountAssignmentDeletionStatusResponse:
    account_assignments_deletion_status: Optional[List[accountassignmentoperationstatusmetadata.AccountAssignmentOperationStatusMetadata]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountAssignmentsDeletionStatus' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
