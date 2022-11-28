from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PrincipalResourcePermissions:
    r"""PrincipalResourcePermissions
    The permissions granted or revoked on a resource.
    """
    
    additional_details: Optional[DetailsMap] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdditionalDetails') }})
    permissions: Optional[List[PermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    permissions_with_grant_option: Optional[List[PermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionsWithGrantOption') }})
    principal: Optional[DataLakePrincipal] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principal') }})
    resource: Optional[Resource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resource') }})
    
