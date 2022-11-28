from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchPermissionsRequestEntry:
    r"""BatchPermissionsRequestEntry
    A permission to a resource granted by batch operation to the principal.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    permissions: Optional[List[PermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    permissions_with_grant_option: Optional[List[PermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionsWithGrantOption') }})
    principal: Optional[DataLakePrincipal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principal') }})
    resource: Optional[Resource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resource') }})
    
