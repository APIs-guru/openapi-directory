from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetListofApproversForBatchPathParams:
    batch_uuid: str = field(metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetListofApproversForBatchBatchApproversApprovals:
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mobile_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileNumber') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass_json
@dataclass
class GetListofApproversForBatchBatchApprovers:
    approvals: Optional[List[GetListofApproversForBatchBatchApproversApprovals]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('approvals') }})
    

@dataclass
class GetListofApproversForBatchRequest:
    path_params: GetListofApproversForBatchPathParams = field()
    

@dataclass
class GetListofApproversForBatchResponse:
    content_type: str = field()
    status_code: int = field()
    batch_approvers: Optional[GetListofApproversForBatchBatchApprovers] = field(default=None)
    
