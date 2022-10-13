from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DetectDocumentTextXAmzTargetEnum(str, Enum):
    TEXTRACT_DETECT_DOCUMENT_TEXT = "Textract.DetectDocumentText"


@dataclass
class DetectDocumentTextHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DetectDocumentTextXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DetectDocumentTextRequest:
    headers: DetectDocumentTextHeaders = field(default=None)
    request: shared.DetectDocumentTextRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DetectDocumentTextResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    bad_document_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    detect_document_text_response: Optional[shared.DetectDocumentTextResponse] = field(default=None)
    document_too_large_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_s3_object_exception: Optional[Any] = field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unsupported_document_exception: Optional[Any] = field(default=None)
    
