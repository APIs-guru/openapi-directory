from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateWorkloadSharePathParams:
    workload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkloadId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateWorkloadShareHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class CreateWorkloadShareRequestBodyPermissionTypeEnum(str, Enum):
    READONLY = "READONLY"
    CONTRIBUTOR = "CONTRIBUTOR"


@dataclass_json
@dataclass
class CreateWorkloadShareRequestBody:
    client_request_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestToken' }})
    permission_type: CreateWorkloadShareRequestBodyPermissionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionType' }})
    shared_with: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SharedWith' }})
    

@dataclass
class CreateWorkloadShareRequest:
    path_params: CreateWorkloadSharePathParams = field(default=None)
    headers: CreateWorkloadShareHeaders = field(default=None)
    request: CreateWorkloadShareRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateWorkloadShareResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_workload_share_output: Optional[shared.CreateWorkloadShareOutput] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
