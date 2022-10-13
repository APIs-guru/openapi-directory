from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AddCommunicationToCaseXAmzTargetEnum(str, Enum):
    AWS_SUPPORT_20130415_ADD_COMMUNICATION_TO_CASE = "AWSSupport_20130415.AddCommunicationToCase"


@dataclass
class AddCommunicationToCaseHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: AddCommunicationToCaseXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class AddCommunicationToCaseRequest:
    headers: AddCommunicationToCaseHeaders = field(default=None)
    request: shared.AddCommunicationToCaseRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddCommunicationToCaseResponse:
    add_communication_to_case_response: Optional[shared.AddCommunicationToCaseResponse] = field(default=None)
    attachment_set_expired: Optional[Any] = field(default=None)
    attachment_set_id_not_found: Optional[Any] = field(default=None)
    case_id_not_found: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
