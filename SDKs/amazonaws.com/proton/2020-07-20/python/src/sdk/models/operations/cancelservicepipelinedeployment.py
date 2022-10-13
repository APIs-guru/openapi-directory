from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CancelServicePipelineDeploymentXAmzTargetEnum(str, Enum):
    AWS_PROTON20200720_CANCEL_SERVICE_PIPELINE_DEPLOYMENT = "AwsProton20200720.CancelServicePipelineDeployment"


@dataclass
class CancelServicePipelineDeploymentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CancelServicePipelineDeploymentXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CancelServicePipelineDeploymentRequest:
    headers: CancelServicePipelineDeploymentHeaders = field(default=None)
    request: shared.CancelServicePipelineDeploymentInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CancelServicePipelineDeploymentResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    cancel_service_pipeline_deployment_output: Optional[shared.CancelServicePipelineDeploymentOutput] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
