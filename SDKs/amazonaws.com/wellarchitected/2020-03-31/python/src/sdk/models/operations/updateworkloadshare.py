from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateWorkloadSharePathParams:
    share_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ShareId', 'style': 'simple', 'explode': False }})
    workload_id: str = field(default=None, metadata={'path_param': { 'field_name': 'WorkloadId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateWorkloadShareHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class UpdateWorkloadShareRequestBodyPermissionTypeEnum(str, Enum):
    READONLY = "READONLY"
    CONTRIBUTOR = "CONTRIBUTOR"


@dataclass_json
@dataclass
class UpdateWorkloadShareRequestBody:
    permission_type: UpdateWorkloadShareRequestBodyPermissionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PermissionType' }})
    

@dataclass
class UpdateWorkloadShareRequest:
    path_params: UpdateWorkloadSharePathParams = field(default=None)
    headers: UpdateWorkloadShareHeaders = field(default=None)
    request: UpdateWorkloadShareRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateWorkloadShareResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_workload_share_output: Optional[shared.UpdateWorkloadShareOutput] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
