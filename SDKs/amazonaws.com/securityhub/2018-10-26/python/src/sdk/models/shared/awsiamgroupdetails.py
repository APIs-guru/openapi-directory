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
class AwsIamGroupDetails:
    r"""AwsIamGroupDetails
    Contains details about an IAM group.
    """
    
    attached_managed_policies: Optional[List[AwsIamAttachedManagedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachedManagedPolicies') }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDate') }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupId') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    group_policy_list: Optional[List[AwsIamGroupPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupPolicyList') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    
