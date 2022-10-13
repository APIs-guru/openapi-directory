from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class SyncDeploymentJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class SyncDeploymentJobRequestBody:
    client_request_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientRequestToken' }})
    fleet: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fleet' }})
    

@dataclass
class SyncDeploymentJobRequest:
    headers: SyncDeploymentJobHeaders = field(default=None)
    request: SyncDeploymentJobRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SyncDeploymentJobResponse:
    concurrent_deployment_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    sync_deployment_job_response: Optional[shared.SyncDeploymentJobResponse] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
