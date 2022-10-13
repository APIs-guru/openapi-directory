from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsiamattachedmanagedpolicy
from . import awsiampermissionsboundary
from . import awsiamuserpolicy


@dataclass_json
@dataclass
class AwsIamUserDetails:
    attached_managed_policies: Optional[List[awsiamattachedmanagedpolicy.AwsIamAttachedManagedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachedManagedPolicies' }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateDate' }})
    group_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupList' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    permissions_boundary: Optional[awsiampermissionsboundary.AwsIamPermissionsBoundary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionsBoundary' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserName' }})
    user_policy_list: Optional[List[awsiamuserpolicy.AwsIamUserPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserPolicyList' }})
    
