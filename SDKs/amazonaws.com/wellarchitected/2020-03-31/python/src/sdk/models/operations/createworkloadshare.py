from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateWorkloadSharePathParams:
    workload_id: str = field(metadata={'path_param': { 'field_name': 'WorkloadId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateWorkloadShareHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class CreateWorkloadShareRequestBodyPermissionTypeEnum(str, Enum):
    READONLY = "READONLY"
    CONTRIBUTOR = "CONTRIBUTOR"


@dataclass_json
@dataclass
class CreateWorkloadShareRequestBody:
    client_request_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestToken') }})
    permission_type: CreateWorkloadShareRequestBodyPermissionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('PermissionType') }})
    shared_with: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SharedWith') }})
    

@dataclass
class CreateWorkloadShareRequest:
    headers: CreateWorkloadShareHeaders = field()
    path_params: CreateWorkloadSharePathParams = field()
    request: CreateWorkloadShareRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWorkloadShareResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_workload_share_output: Optional[shared.CreateWorkloadShareOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
