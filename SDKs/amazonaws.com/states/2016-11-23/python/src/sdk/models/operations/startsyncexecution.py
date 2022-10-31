from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StartSyncExecutionXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_START_SYNC_EXECUTION = "AWSStepFunctions.StartSyncExecution"


@dataclass
class StartSyncExecutionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: StartSyncExecutionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartSyncExecutionRequest:
    headers: StartSyncExecutionHeaders = field(default=None)
    request: shared.StartSyncExecutionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartSyncExecutionResponse:
    content_type: str = field(default=None)
    invalid_arn: Optional[Any] = field(default=None)
    invalid_execution_input: Optional[Any] = field(default=None)
    invalid_name: Optional[Any] = field(default=None)
    start_sync_execution_output: Optional[shared.StartSyncExecutionOutput] = field(default=None)
    state_machine_deleting: Optional[Any] = field(default=None)
    state_machine_does_not_exist: Optional[Any] = field(default=None)
    state_machine_type_not_supported: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
