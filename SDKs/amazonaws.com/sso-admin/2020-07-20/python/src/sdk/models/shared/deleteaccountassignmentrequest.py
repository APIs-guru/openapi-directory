from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import principaltype_enum
from . import targettype_enum


@dataclass_json
@dataclass
class DeleteAccountAssignmentRequest:
    instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceArn' }})
    permission_set_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionSetArn' }})
    principal_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalId' }})
    principal_type: principaltype_enum.PrincipalTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalType' }})
    target_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetId' }})
    target_type: targettype_enum.TargetTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetType' }})
    
