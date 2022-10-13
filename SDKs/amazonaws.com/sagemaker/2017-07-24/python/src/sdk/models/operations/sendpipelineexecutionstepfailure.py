from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SendPipelineExecutionStepFailureXAmzTargetEnum(str, Enum):
    SAGE_MAKER_SEND_PIPELINE_EXECUTION_STEP_FAILURE = "SageMaker.SendPipelineExecutionStepFailure"


@dataclass
class SendPipelineExecutionStepFailureHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: SendPipelineExecutionStepFailureXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class SendPipelineExecutionStepFailureRequest:
    headers: SendPipelineExecutionStepFailureHeaders = field(default=None)
    request: shared.SendPipelineExecutionStepFailureRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendPipelineExecutionStepFailureResponse:
    content_type: str = field(default=None)
    resource_limit_exceeded: Optional[Any] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    send_pipeline_execution_step_failure_response: Optional[shared.SendPipelineExecutionStepFailureResponse] = field(default=None)
    status_code: int = field(default=None)
    
