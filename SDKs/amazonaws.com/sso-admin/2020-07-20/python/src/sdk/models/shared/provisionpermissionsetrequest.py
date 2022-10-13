from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import provisiontargettype_enum


@dataclass_json
@dataclass
class ProvisionPermissionSetRequest:
    instance_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceArn' }})
    permission_set_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionSetArn' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetId' }})
    target_type: provisiontargettype_enum.ProvisionTargetTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetType' }})
    
