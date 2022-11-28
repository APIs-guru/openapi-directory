from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class PutLifecyclePolicyXAmzTargetEnum(str, Enum):
    MEDIA_STORE_20170901_PUT_LIFECYCLE_POLICY = "MediaStore_20170901.PutLifecyclePolicy"


@dataclass
class PutLifecyclePolicyHeaders:
    x_amz_target: PutLifecyclePolicyXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutLifecyclePolicyRequest:
    headers: PutLifecyclePolicyHeaders = field()
    request: shared.PutLifecyclePolicyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutLifecyclePolicyResponse:
    content_type: str = field()
    status_code: int = field()
    container_in_use_exception: Optional[Any] = field(default=None)
    container_not_found_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    put_lifecycle_policy_output: Optional[dict[str, Any]] = field(default=None)
    
