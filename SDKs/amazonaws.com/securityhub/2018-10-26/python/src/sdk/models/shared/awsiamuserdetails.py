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
class AwsIamUserDetails:
    r"""AwsIamUserDetails
    Information about an IAM user.
    """
    
    attached_managed_policies: Optional[List[AwsIamAttachedManagedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachedManagedPolicies') }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDate') }})
    group_list: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupList') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    permissions_boundary: Optional[AwsIamPermissionsBoundary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionsBoundary') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    user_policy_list: Optional[List[AwsIamUserPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserPolicyList') }})
    
