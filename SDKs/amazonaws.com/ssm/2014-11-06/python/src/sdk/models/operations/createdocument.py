from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CreateDocumentXAmzTargetEnum(str, Enum):
    AMAZON_SSM_CREATE_DOCUMENT = "AmazonSSM.CreateDocument"


@dataclass
class CreateDocumentHeaders:
    x_amz_target: CreateDocumentXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDocumentRequest:
    headers: CreateDocumentHeaders = field()
    request: shared.CreateDocumentRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDocumentResponse:
    content_type: str = field()
    status_code: int = field()
    create_document_result: Optional[shared.CreateDocumentResult] = field(default=None)
    document_already_exists: Optional[Any] = field(default=None)
    document_limit_exceeded: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_document_content: Optional[Any] = field(default=None)
    invalid_document_schema_version: Optional[Any] = field(default=None)
    max_document_size_exceeded: Optional[Any] = field(default=None)
    
