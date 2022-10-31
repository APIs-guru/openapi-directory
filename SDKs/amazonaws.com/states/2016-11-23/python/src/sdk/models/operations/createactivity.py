from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateActivityXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_CREATE_ACTIVITY = "AWSStepFunctions.CreateActivity"


@dataclass
class CreateActivityHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateActivityXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateActivityRequest:
    headers: CreateActivityHeaders = field(default=None)
    request: shared.CreateActivityInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateActivityResponse:
    activity_limit_exceeded: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_activity_output: Optional[shared.CreateActivityOutput] = field(default=None)
    invalid_name: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_tags: Optional[Any] = field(default=None)
    
