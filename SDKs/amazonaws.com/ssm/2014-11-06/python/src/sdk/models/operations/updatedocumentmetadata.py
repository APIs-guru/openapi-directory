from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class UpdateDocumentMetadataXAmzTargetEnum(str, Enum):
    AMAZON_SSM_UPDATE_DOCUMENT_METADATA = "AmazonSSM.UpdateDocumentMetadata"


@dataclass
class UpdateDocumentMetadataHeaders:
    x_amz_target: UpdateDocumentMetadataXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDocumentMetadataRequest:
    headers: UpdateDocumentMetadataHeaders = field()
    request: shared.UpdateDocumentMetadataRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDocumentMetadataResponse:
    content_type: str = field()
    status_code: int = field()
    internal_server_error: Optional[Any] = field(default=None)
    invalid_document: Optional[Any] = field(default=None)
    invalid_document_operation: Optional[Any] = field(default=None)
    invalid_document_version: Optional[Any] = field(default=None)
    update_document_metadata_response: Optional[dict[str, Any]] = field(default=None)
    
