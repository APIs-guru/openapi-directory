from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import membertype_enum
from . import permissiontype_enum


@dataclass_json
@dataclass
class Permission:
    grantee_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GranteeId' }})
    grantee_type: membertype_enum.MemberTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GranteeType' }})
    permission_values: List[permissiontype_enum.PermissionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionValues' }})
    
