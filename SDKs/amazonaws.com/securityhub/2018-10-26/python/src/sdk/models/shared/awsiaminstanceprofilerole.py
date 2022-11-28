from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsIamInstanceProfileRole:
    r"""AwsIamInstanceProfileRole
    Information about a role associated with an instance profile.
    """
    
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Arn') }})
    assume_role_policy_document: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssumeRolePolicyDocument') }})
    create_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateDate') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Path') }})
    role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleId') }})
    role_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleName') }})
    
