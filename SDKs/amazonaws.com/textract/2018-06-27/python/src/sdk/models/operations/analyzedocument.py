from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AnalyzeDocumentXAmzTargetEnum(str, Enum):
    TEXTRACT_ANALYZE_DOCUMENT = "Textract.AnalyzeDocument"


@dataclass
class AnalyzeDocumentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: AnalyzeDocumentXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class AnalyzeDocumentRequest:
    headers: AnalyzeDocumentHeaders = field(default=None)
    request: shared.AnalyzeDocumentRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AnalyzeDocumentResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    analyze_document_response: Optional[shared.AnalyzeDocumentResponse] = field(default=None)
    bad_document_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    document_too_large_exception: Optional[Any] = field(default=None)
    human_loop_quota_exceeded_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_s3_object_exception: Optional[Any] = field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unsupported_document_exception: Optional[Any] = field(default=None)
    
