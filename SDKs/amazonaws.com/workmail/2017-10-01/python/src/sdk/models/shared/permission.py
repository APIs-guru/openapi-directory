from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Permission:
    r"""Permission
    Permission granted to a user, group, or resource to access a certain aspect of another user, group, or resource mailbox.
    """
    
    grantee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GranteeId') }})
    grantee_type: MemberTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GranteeType') }})
    permission_values: List[PermissionTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionValues') }})
    
