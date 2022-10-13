from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AddAttachmentsToSetXAmzTargetEnum(str, Enum):
    AWS_SUPPORT_20130415_ADD_ATTACHMENTS_TO_SET = "AWSSupport_20130415.AddAttachmentsToSet"


@dataclass
class AddAttachmentsToSetHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: AddAttachmentsToSetXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class AddAttachmentsToSetRequest:
    headers: AddAttachmentsToSetHeaders = field(default=None)
    request: shared.AddAttachmentsToSetRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddAttachmentsToSetResponse:
    add_attachments_to_set_response: Optional[shared.AddAttachmentsToSetResponse] = field(default=None)
    attachment_limit_exceeded: Optional[Any] = field(default=None)
    attachment_set_expired: Optional[Any] = field(default=None)
    attachment_set_id_not_found: Optional[Any] = field(default=None)
    attachment_set_size_limit_exceeded: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
