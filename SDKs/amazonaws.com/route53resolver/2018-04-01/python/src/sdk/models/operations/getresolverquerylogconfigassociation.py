from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetResolverQueryLogConfigAssociationXAmzTargetEnum(str, Enum):
    ROUTE53_RESOLVER_GET_RESOLVER_QUERY_LOG_CONFIG_ASSOCIATION = "Route53Resolver.GetResolverQueryLogConfigAssociation"


@dataclass
class GetResolverQueryLogConfigAssociationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetResolverQueryLogConfigAssociationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetResolverQueryLogConfigAssociationRequest:
    headers: GetResolverQueryLogConfigAssociationHeaders = field(default=None)
    request: shared.GetResolverQueryLogConfigAssociationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetResolverQueryLogConfigAssociationResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_resolver_query_log_config_association_response: Optional[shared.GetResolverQueryLogConfigAssociationResponse] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
