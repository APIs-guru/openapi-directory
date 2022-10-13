from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateStateMachineXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_UPDATE_STATE_MACHINE = "AWSStepFunctions.UpdateStateMachine"


@dataclass
class UpdateStateMachineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateStateMachineXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateStateMachineRequest:
    headers: UpdateStateMachineHeaders = field(default=None)
    request: shared.UpdateStateMachineInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateStateMachineResponse:
    content_type: str = field(default=None)
    invalid_arn: Optional[Any] = field(default=None)
    invalid_definition: Optional[Any] = field(default=None)
    invalid_logging_configuration: Optional[Any] = field(default=None)
    invalid_tracing_configuration: Optional[Any] = field(default=None)
    missing_required_parameter: Optional[Any] = field(default=None)
    state_machine_deleting: Optional[Any] = field(default=None)
    state_machine_does_not_exist: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_state_machine_output: Optional[shared.UpdateStateMachineOutput] = field(default=None)
    
