from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import modelapprovalstatus_enum
from . import modelpackagestatus_enum


@dataclass_json
@dataclass
class ModelPackageSummary:
    creation_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    model_approval_status: Optional[modelapprovalstatus_enum.ModelApprovalStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelApprovalStatus' }})
    model_package_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageArn' }})
    model_package_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageDescription' }})
    model_package_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageGroupName' }})
    model_package_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageName' }})
    model_package_status: modelpackagestatus_enum.ModelPackageStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageStatus' }})
    model_package_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelPackageVersion' }})
    
