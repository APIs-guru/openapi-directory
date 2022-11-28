from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PermissionChange:
    r"""PermissionChange
    Contains information about a Drive object's permissions that changed as a result of a permissionChange type event.
    """
    
    added_permissions: Optional[List[Permission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedPermissions') }})
    removed_permissions: Optional[List[Permission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removedPermissions') }})
    
