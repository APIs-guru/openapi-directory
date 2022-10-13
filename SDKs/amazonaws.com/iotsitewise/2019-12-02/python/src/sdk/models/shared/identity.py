from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import groupidentity
from . import iamroleidentity
from . import iamuseridentity
from . import useridentity


@dataclass_json
@dataclass
class Identity:
    group: Optional[groupidentity.GroupIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    iam_role: Optional[iamroleidentity.IamRoleIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamRole' }})
    iam_user: Optional[iamuseridentity.IamUserIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamUser' }})
    user: Optional[useridentity.UserIdentity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    
