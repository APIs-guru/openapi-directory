from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsIamRoleDetails:
    r"""AwsIamRoleDetails
    Contains information about an IAM role, including all of the role's policies.
    """
    
    assume_role_policy_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssumeRolePolicyDocument') }})
    attached_managed_policies: Optional[List[AwsIamAttachedManagedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachedManagedPolicies') }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDate') }})
    instance_profile_list: Optional[List[AwsIamInstanceProfile]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceProfileList') }})
    max_session_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxSessionDuration') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    permissions_boundary: Optional[AwsIamPermissionsBoundary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionsBoundary') }})
    role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleId') }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleName') }})
    role_policy_list: Optional[List[AwsIamRolePolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RolePolicyList') }})
    
