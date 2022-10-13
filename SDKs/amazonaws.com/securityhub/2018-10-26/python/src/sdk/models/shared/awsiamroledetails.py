from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsiamattachedmanagedpolicy
from . import awsiaminstanceprofile
from . import awsiampermissionsboundary
from . import awsiamrolepolicy


@dataclass_json
@dataclass
class AwsIamRoleDetails:
    assume_role_policy_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssumeRolePolicyDocument' }})
    attached_managed_policies: Optional[List[awsiamattachedmanagedpolicy.AwsIamAttachedManagedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachedManagedPolicies' }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateDate' }})
    instance_profile_list: Optional[List[awsiaminstanceprofile.AwsIamInstanceProfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceProfileList' }})
    max_session_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxSessionDuration' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Path' }})
    permissions_boundary: Optional[awsiampermissionsboundary.AwsIamPermissionsBoundary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionsBoundary' }})
    role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleId' }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleName' }})
    role_policy_list: Optional[List[awsiamrolepolicy.AwsIamRolePolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RolePolicyList' }})
    
