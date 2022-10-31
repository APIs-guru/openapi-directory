from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeregisterInstanceXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_DEREGISTER_INSTANCE = "Route53AutoNaming_v20170314.DeregisterInstance"


@dataclass
class DeregisterInstanceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DeregisterInstanceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeregisterInstanceRequest:
    headers: DeregisterInstanceHeaders = field(default=None)
    request: shared.DeregisterInstanceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeregisterInstanceResponse:
    content_type: str = field(default=None)
    deregister_instance_response: Optional[shared.DeregisterInstanceResponse] = field(default=None)
    duplicate_request: Optional[Any] = field(default=None)
    instance_not_found: Optional[Any] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    resource_in_use: Optional[Any] = field(default=None)
    service_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
