from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attachedmanagedpolicy


@dataclass_json
@dataclass
class ListManagedPoliciesInPermissionSetResponse:
    attached_managed_policies: Optional[List[attachedmanagedpolicy.AttachedManagedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachedManagedPolicies' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
