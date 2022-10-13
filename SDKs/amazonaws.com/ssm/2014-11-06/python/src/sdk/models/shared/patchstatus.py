from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import patchcompliancelevel_enum
from . import patchdeploymentstatus_enum


@dataclass_json
@dataclass
class PatchStatus:
    approval_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApprovalDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    compliance_level: Optional[patchcompliancelevel_enum.PatchComplianceLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComplianceLevel' }})
    deployment_status: Optional[patchdeploymentstatus_enum.PatchDeploymentStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeploymentStatus' }})
    
