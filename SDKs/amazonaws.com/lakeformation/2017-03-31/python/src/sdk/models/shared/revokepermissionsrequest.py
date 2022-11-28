from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RevokePermissionsRequest:
    permissions: List[PermissionEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Permissions') }})
    principal: DataLakePrincipal = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Principal') }})
    resource: Resource = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Resource') }})
    catalog_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CatalogId') }})
    permissions_with_grant_option: Optional[List[PermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionsWithGrantOption') }})
    
