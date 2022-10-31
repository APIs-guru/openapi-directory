from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AttachStaticIPXAmzTargetEnum(str, Enum):
    LIGHTSAIL_20161128_ATTACH_STATIC_IP = "Lightsail_20161128.AttachStaticIp"


@dataclass
class AttachStaticIPHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: AttachStaticIPXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class AttachStaticIPRequest:
    headers: AttachStaticIPHeaders = field(default=None)
    request: shared.AttachStaticIPRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AttachStaticIPResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    account_setup_in_progress_exception: Optional[Any] = field(default=None)
    attach_static_ip_result: Optional[shared.AttachStaticIPResult] = field(default=None)
    content_type: str = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    operation_failure_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unauthenticated_exception: Optional[Any] = field(default=None)
    
