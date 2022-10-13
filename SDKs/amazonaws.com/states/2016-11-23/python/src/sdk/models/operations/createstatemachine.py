from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateStateMachineXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_CREATE_STATE_MACHINE = "AWSStepFunctions.CreateStateMachine"


@dataclass
class CreateStateMachineHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateStateMachineXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateStateMachineRequest:
    headers: CreateStateMachineHeaders = field(default=None)
    request: shared.CreateStateMachineInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateStateMachineResponse:
    content_type: str = field(default=None)
    create_state_machine_output: Optional[shared.CreateStateMachineOutput] = field(default=None)
    invalid_arn: Optional[Any] = field(default=None)
    invalid_definition: Optional[Any] = field(default=None)
    invalid_logging_configuration: Optional[Any] = field(default=None)
    invalid_name: Optional[Any] = field(default=None)
    invalid_tracing_configuration: Optional[Any] = field(default=None)
    state_machine_already_exists: Optional[Any] = field(default=None)
    state_machine_deleting: Optional[Any] = field(default=None)
    state_machine_limit_exceeded: Optional[Any] = field(default=None)
    state_machine_type_not_supported: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_tags: Optional[Any] = field(default=None)
    
