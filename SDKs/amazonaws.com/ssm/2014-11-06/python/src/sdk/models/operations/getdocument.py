from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetDocumentXAmzTargetEnum(str, Enum):
    AMAZON_SSM_GET_DOCUMENT = "AmazonSSM.GetDocument"


@dataclass
class GetDocumentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetDocumentXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetDocumentRequest:
    headers: GetDocumentHeaders = field(default=None)
    request: shared.GetDocumentRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDocumentResponse:
    content_type: str = field(default=None)
    get_document_result: Optional[shared.GetDocumentResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_document: Optional[Any] = field(default=None)
    invalid_document_version: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
