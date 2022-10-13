from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StartChangeRequestExecutionXAmzTargetEnum(str, Enum):
    AMAZON_SSM_START_CHANGE_REQUEST_EXECUTION = "AmazonSSM.StartChangeRequestExecution"


@dataclass
class StartChangeRequestExecutionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: StartChangeRequestExecutionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class StartChangeRequestExecutionRequest:
    headers: StartChangeRequestExecutionHeaders = field(default=None)
    request: shared.StartChangeRequestExecutionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartChangeRequestExecutionResponse:
    automation_definition_not_approved_exception: Optional[Any] = field(default=None)
    automation_definition_not_found_exception: Optional[Any] = field(default=None)
    automation_definition_version_not_found_exception: Optional[Any] = field(default=None)
    automation_execution_limit_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    idempotent_parameter_mismatch: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_automation_execution_parameters_exception: Optional[Any] = field(default=None)
    start_change_request_execution_result: Optional[shared.StartChangeRequestExecutionResult] = field(default=None)
    status_code: int = field(default=None)
    
