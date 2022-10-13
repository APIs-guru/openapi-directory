from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ModifyDocumentPermissionXAmzTargetEnum(str, Enum):
    AMAZON_SSM_MODIFY_DOCUMENT_PERMISSION = "AmazonSSM.ModifyDocumentPermission"


@dataclass
class ModifyDocumentPermissionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ModifyDocumentPermissionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ModifyDocumentPermissionRequest:
    headers: ModifyDocumentPermissionHeaders = field(default=None)
    request: shared.ModifyDocumentPermissionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyDocumentPermissionResponse:
    content_type: str = field(default=None)
    document_limit_exceeded: Optional[Any] = field(default=None)
    document_permission_limit: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_document: Optional[Any] = field(default=None)
    invalid_permission_type: Optional[Any] = field(default=None)
    modify_document_permission_response: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
