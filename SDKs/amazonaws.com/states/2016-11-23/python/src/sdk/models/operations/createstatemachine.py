from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateStateMachineXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_CREATE_STATE_MACHINE = "AWSStepFunctions.CreateStateMachine"


@dataclass
class CreateStateMachineHeaders:
    x_amz_target: CreateStateMachineXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateStateMachineRequest:
    headers: CreateStateMachineHeaders = field()
    request: shared.CreateStateMachineInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateStateMachineResponse:
    content_type: str = field()
    status_code: int = field()
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
    too_many_tags: Optional[Any] = field(default=None)
    
