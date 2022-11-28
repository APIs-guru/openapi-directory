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
class AwsIamPolicyDetails:
    r"""AwsIamPolicyDetails
    Represents an IAM permissions policy.
    """
    
    attachment_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachmentCount') }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDate') }})
    default_version_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DefaultVersionId') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    is_attachable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsAttachable') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    permissions_boundary_usage_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionsBoundaryUsageCount') }})
    policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyId') }})
    policy_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyName') }})
    policy_version_list: Optional[List[AwsIamPolicyVersion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PolicyVersionList') }})
    update_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateDate') }})
    
