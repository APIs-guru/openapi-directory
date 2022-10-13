from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import modelapprovalstatus_enum


@dataclass_json
@dataclass
class UpdateModelPackageInput:
    approval_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovalDescription' }})
    model_approval_status: modelapprovalstatus_enum.ModelApprovalStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelApprovalStatus' }})
    model_package_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageArn' }})
    
