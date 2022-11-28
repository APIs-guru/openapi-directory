from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountAssignmentOperationStatus:
    r"""AccountAssignmentOperationStatus
    The status of the creation or deletion operation of an assignment that a principal needs to access an account.
    """
    
    created_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailureReason') }})
    permission_set_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionSetArn') }})
    principal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalId') }})
    principal_type: Optional[PrincipalTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrincipalType') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RequestId') }})
    status: Optional[StatusValuesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetId') }})
    target_type: Optional[TargetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetType') }})
    
