from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SendCommandXAmzTargetEnum(str, Enum):
    AMAZON_SSM_SEND_COMMAND = "AmazonSSM.SendCommand"


@dataclass
class SendCommandHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: SendCommandXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class SendCommandRequest:
    headers: SendCommandHeaders = field(default=None)
    request: shared.SendCommandRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendCommandResponse:
    content_type: str = field(default=None)
    duplicate_instance_id: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_document: Optional[Any] = field(default=None)
    invalid_document_version: Optional[Any] = field(default=None)
    invalid_instance_id: Optional[Any] = field(default=None)
    invalid_notification_config: Optional[Any] = field(default=None)
    invalid_output_folder: Optional[Any] = field(default=None)
    invalid_parameters: Optional[Any] = field(default=None)
    invalid_role: Optional[Any] = field(default=None)
    max_document_size_exceeded: Optional[Any] = field(default=None)
    send_command_result: Optional[shared.SendCommandResult] = field(default=None)
    status_code: int = field(default=None)
    unsupported_platform_type: Optional[Any] = field(default=None)
    
