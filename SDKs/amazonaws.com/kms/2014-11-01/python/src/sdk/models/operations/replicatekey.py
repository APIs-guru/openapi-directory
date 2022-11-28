from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class ReplicateKeyXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_REPLICATE_KEY = "TrentService.ReplicateKey"


@dataclass
class ReplicateKeyHeaders:
    x_amz_target: ReplicateKeyXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReplicateKeyRequest:
    headers: ReplicateKeyHeaders = field()
    request: shared.ReplicateKeyRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReplicateKeyResponse:
    content_type: str = field()
    status_code: int = field()
    already_exists_exception: Optional[Any] = field(default=None)
    disabled_exception: Optional[Any] = field(default=None)
    invalid_arn_exception: Optional[Any] = field(default=None)
    kms_internal_exception: Optional[Any] = field(default=None)
    kms_invalid_state_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    malformed_policy_document_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    replicate_key_response: Optional[shared.ReplicateKeyResponse] = field(default=None)
    tag_exception: Optional[Any] = field(default=None)
    unsupported_operation_exception: Optional[Any] = field(default=None)
    
