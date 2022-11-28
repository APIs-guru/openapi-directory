from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountAssignment:
    r"""AccountAssignment
    <p>The assignment that indicates a principal's limited access to a specified Amazon Web Services account with a specified permission set.</p> <note> <p>The term <i>principal</i> here refers to a user or group that is defined in Amazon Web Services SSO.</p> </note>
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountId') }})
    permission_set_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSetArn') }})
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalId') }})
    principal_type: Optional[PrincipalTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalType') }})
    
