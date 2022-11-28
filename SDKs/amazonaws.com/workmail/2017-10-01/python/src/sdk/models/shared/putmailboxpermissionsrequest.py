from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutMailboxPermissionsRequest:
    entity_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityId') }})
    grantee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GranteeId') }})
    organization_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    permission_values: List[PermissionTypeEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionValues') }})
    
