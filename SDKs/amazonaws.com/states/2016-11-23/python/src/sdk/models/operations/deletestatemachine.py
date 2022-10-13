from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeleteStateMachineXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_DELETE_STATE_MACHINE = "AWSStepFunctions.DeleteStateMachine"


@dataclass
class DeleteStateMachineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DeleteStateMachineXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DeleteStateMachineRequest:
    headers: DeleteStateMachineHeaders = field(default=None)
    request: shared.DeleteStateMachineInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeleteStateMachineResponse:
    content_type: str = field(default=None)
    delete_state_machine_output: Optional[dict[str, Any]] = field(default=None)
    invalid_arn: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
