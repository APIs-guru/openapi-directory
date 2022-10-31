from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StartDocumentAnalysisXAmzTargetEnum(str, Enum):
    TEXTRACT_START_DOCUMENT_ANALYSIS = "Textract.StartDocumentAnalysis"


@dataclass
class StartDocumentAnalysisHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: StartDocumentAnalysisXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartDocumentAnalysisRequest:
    headers: StartDocumentAnalysisHeaders = field(default=None)
    request: shared.StartDocumentAnalysisRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartDocumentAnalysisResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    bad_document_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    document_too_large_exception: Optional[Any] = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_kms_key_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_s3_object_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    provisioned_throughput_exceeded_exception: Optional[Any] = field(default=None)
    start_document_analysis_response: Optional[shared.StartDocumentAnalysisResponse] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    unsupported_document_exception: Optional[Any] = field(default=None)
    
