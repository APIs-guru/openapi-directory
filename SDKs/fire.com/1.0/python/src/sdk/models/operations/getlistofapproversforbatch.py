from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetListofApproversForBatchPathParams:
    batch_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'batchUuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListofApproversForBatchRequest:
    path_params: GetListofApproversForBatchPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetListofApproversForBatchBatchApproversApprovals:
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    mobile_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileNumber' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

@dataclass_json
@dataclass
class GetListofApproversForBatchBatchApprovers:
    approvals: Optional[List[GetListofApproversForBatchBatchApproversApprovals]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'approvals' }})
    

@dataclass
class GetListofApproversForBatchResponse:
    batch_approvers: Optional[GetListofApproversForBatchBatchApprovers] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
