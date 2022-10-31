from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SendPipelineExecutionStepSuccessXAmzTargetEnum(str, Enum):
    SAGE_MAKER_SEND_PIPELINE_EXECUTION_STEP_SUCCESS = "SageMaker.SendPipelineExecutionStepSuccess"


@dataclass
class SendPipelineExecutionStepSuccessHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: SendPipelineExecutionStepSuccessXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendPipelineExecutionStepSuccessRequest:
    headers: SendPipelineExecutionStepSuccessHeaders = field(default=None)
    request: shared.SendPipelineExecutionStepSuccessRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendPipelineExecutionStepSuccessResponse:
    content_type: str = field(default=None)
    resource_limit_exceeded: Optional[Any] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    send_pipeline_execution_step_success_response: Optional[shared.SendPipelineExecutionStepSuccessResponse] = field(default=None)
    status_code: int = field(default=None)
    
