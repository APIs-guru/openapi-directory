from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ModifyDocumentPermissionXAmzTargetEnum(str, Enum):
    AMAZON_SSM_MODIFY_DOCUMENT_PERMISSION = "AmazonSSM.ModifyDocumentPermission"


@dataclass
class ModifyDocumentPermissionHeaders:
    x_amz_target: ModifyDocumentPermissionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ModifyDocumentPermissionRequest:
    headers: ModifyDocumentPermissionHeaders = field()
    request: shared.ModifyDocumentPermissionRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ModifyDocumentPermissionResponse:
    content_type: str = field()
    status_code: int = field()
    document_limit_exceeded: Optional[Any] = field(default=None)
    document_permission_limit: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_document: Optional[Any] = field(default=None)
    invalid_permission_type: Optional[Any] = field(default=None)
    modify_document_permission_response: Optional[dict[str, Any]] = field(default=None)
    
