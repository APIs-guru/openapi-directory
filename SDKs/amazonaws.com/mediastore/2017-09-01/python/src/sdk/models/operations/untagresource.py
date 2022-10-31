from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class UntagResourceXAmzTargetEnum(str, Enum):
    MEDIA_STORE_20170901_UNTAG_RESOURCE = "MediaStore_20170901.UntagResource"


@dataclass
class UntagResourceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: UntagResourceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class UntagResourceRequest:
    headers: UntagResourceHeaders = field(default=None)
    request: shared.UntagResourceInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UntagResourceResponse:
    container_in_use_exception: Optional[Any] = field(default=None)
    container_not_found_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    untag_resource_output: Optional[dict[str, Any]] = field(default=None)
    
