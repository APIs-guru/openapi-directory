from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DescribePermissionsRequest:
    iam_user_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamUserArn') }})
    stack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    
