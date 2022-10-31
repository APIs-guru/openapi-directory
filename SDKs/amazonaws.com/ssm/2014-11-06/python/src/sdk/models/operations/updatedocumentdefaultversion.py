from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UpdateDocumentDefaultVersionXAmzTargetEnum(str, Enum):
    AMAZON_SSM_UPDATE_DOCUMENT_DEFAULT_VERSION = "AmazonSSM.UpdateDocumentDefaultVersion"


@dataclass
class UpdateDocumentDefaultVersionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: UpdateDocumentDefaultVersionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDocumentDefaultVersionRequest:
    headers: UpdateDocumentDefaultVersionHeaders = field(default=None)
    request: shared.UpdateDocumentDefaultVersionRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDocumentDefaultVersionResponse:
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_document: Optional[Any] = field(default=None)
    invalid_document_schema_version: Optional[Any] = field(default=None)
    invalid_document_version: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    update_document_default_version_result: Optional[shared.UpdateDocumentDefaultVersionResult] = field(default=None)
    
