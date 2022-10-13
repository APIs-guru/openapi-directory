from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CancelCommandXAmzTargetEnum(str, Enum):
    AMAZON_SSM_CANCEL_COMMAND = "AmazonSSM.CancelCommand"


@dataclass
class CancelCommandHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CancelCommandXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CancelCommandRequest:
    headers: CancelCommandHeaders = field(default=None)
    request: shared.CancelCommandRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CancelCommandResponse:
    cancel_command_result: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    duplicate_instance_id: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_command_id: Optional[Any] = field(default=None)
    invalid_instance_id: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
