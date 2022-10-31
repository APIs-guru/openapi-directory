from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SendCommandXAmzTargetEnum(str, Enum):
    QLDB_SESSION_SEND_COMMAND = "QLDBSession.SendCommand"


@dataclass
class SendCommandHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: SendCommandXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendCommandRequest:
    headers: SendCommandHeaders = field(default=None)
    request: shared.SendCommandRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendCommandResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    capacity_exceeded_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    invalid_session_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    occ_conflict_exception: Optional[Any] = field(default=None)
    rate_exceeded_exception: Optional[Any] = field(default=None)
    send_command_result: Optional[shared.SendCommandResult] = field(default=None)
    status_code: int = field(default=None)
    
