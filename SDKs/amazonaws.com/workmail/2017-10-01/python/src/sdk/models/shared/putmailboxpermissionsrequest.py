from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import permissiontype_enum


@dataclass_json
@dataclass
class PutMailboxPermissionsRequest:
    entity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityId' }})
    grantee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GranteeId' }})
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    permission_values: List[permissiontype_enum.PermissionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionValues' }})
    
