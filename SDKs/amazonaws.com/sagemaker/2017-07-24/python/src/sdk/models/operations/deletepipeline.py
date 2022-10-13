from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeletePipelineXAmzTargetEnum(str, Enum):
    SAGE_MAKER_DELETE_PIPELINE = "SageMaker.DeletePipeline"


@dataclass
class DeletePipelineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DeletePipelineXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DeletePipelineRequest:
    headers: DeletePipelineHeaders = field(default=None)
    request: shared.DeletePipelineRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeletePipelineResponse:
    content_type: str = field(default=None)
    delete_pipeline_response: Optional[shared.DeletePipelineResponse] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
