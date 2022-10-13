from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateDocumentXAmzTargetEnum(str, Enum):
    AMAZON_SSM_UPDATE_DOCUMENT = "AmazonSSM.UpdateDocument"


@dataclass
class UpdateDocumentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: UpdateDocumentXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class UpdateDocumentRequest:
    headers: UpdateDocumentHeaders = field(default=None)
    request: shared.UpdateDocumentRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDocumentResponse:
    content_type: str = field(default=None)
    document_version_limit_exceeded: Optional[Any] = field(default=None)
    duplicate_document_content: Optional[Any] = field(default=None)
    duplicate_document_version_name: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_document: Optional[Any] = field(default=None)
    invalid_document_content: Optional[Any] = field(default=None)
    invalid_document_operation: Optional[Any] = field(default=None)
    invalid_document_schema_version: Optional[Any] = field(default=None)
    invalid_document_version: Optional[Any] = field(default=None)
    max_document_size_exceeded: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_document_result: Optional[shared.UpdateDocumentResult] = field(default=None)
    
