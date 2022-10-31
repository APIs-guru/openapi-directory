from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdatePipelineXAmzTargetEnum(str, Enum):
    SAGE_MAKER_UPDATE_PIPELINE = "SageMaker.UpdatePipeline"


@dataclass
class UpdatePipelineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: UpdatePipelineXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePipelineRequest:
    headers: UpdatePipelineHeaders = field(default=None)
    request: shared.UpdatePipelineRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePipelineResponse:
    content_type: str = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_pipeline_response: Optional[shared.UpdatePipelineResponse] = field(default=None)
    
