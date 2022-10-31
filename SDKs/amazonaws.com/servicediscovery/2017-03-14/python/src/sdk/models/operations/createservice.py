from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateServiceXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_CREATE_SERVICE = "Route53AutoNaming_v20170314.CreateService"


@dataclass
class CreateServiceHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateServiceXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateServiceRequest:
    headers: CreateServiceHeaders = field(default=None)
    request: shared.CreateServiceRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateServiceResponse:
    content_type: str = field(default=None)
    create_service_response: Optional[shared.CreateServiceResponse] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    namespace_not_found: Optional[Any] = field(default=None)
    resource_limit_exceeded: Optional[Any] = field(default=None)
    service_already_exists: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_tags_exception: Optional[Any] = field(default=None)
    
