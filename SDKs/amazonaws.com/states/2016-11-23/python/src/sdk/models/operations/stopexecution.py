from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StopExecutionXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_STOP_EXECUTION = "AWSStepFunctions.StopExecution"


@dataclass
class StopExecutionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: StopExecutionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class StopExecutionRequest:
    headers: StopExecutionHeaders = field(default=None)
    request: shared.StopExecutionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StopExecutionResponse:
    content_type: str = field(default=None)
    execution_does_not_exist: Optional[Any] = field(default=None)
    invalid_arn: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    stop_execution_output: Optional[shared.StopExecutionOutput] = field(default=None)
    
