from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import principaltype_enum
from . import statusvalues_enum
from . import targettype_enum


@dataclass_json
@dataclass
class AccountAssignmentOperationStatus:
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureReason' }})
    permission_set_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionSetArn' }})
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalId' }})
    principal_type: Optional[principaltype_enum.PrincipalTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrincipalType' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RequestId' }})
    status: Optional[statusvalues_enum.StatusValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetId' }})
    target_type: Optional[targettype_enum.TargetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetType' }})
    
