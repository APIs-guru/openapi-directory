from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AssociateResolverEndpointIPAddressXAmzTargetEnum(str, Enum):
    ROUTE53_RESOLVER_ASSOCIATE_RESOLVER_ENDPOINT_IP_ADDRESS = "Route53Resolver.AssociateResolverEndpointIpAddress"


@dataclass
class AssociateResolverEndpointIPAddressHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: AssociateResolverEndpointIPAddressXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateResolverEndpointIPAddressRequest:
    headers: AssociateResolverEndpointIPAddressHeaders = field(default=None)
    request: shared.AssociateResolverEndpointIPAddressRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateResolverEndpointIPAddressResponse:
    associate_resolver_endpoint_ip_address_response: Optional[shared.AssociateResolverEndpointIPAddressResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_exists_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
