from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AssociateResolverQueryLogConfigXAmzTargetEnum(str, Enum):
    ROUTE53_RESOLVER_ASSOCIATE_RESOLVER_QUERY_LOG_CONFIG = "Route53Resolver.AssociateResolverQueryLogConfig"


@dataclass
class AssociateResolverQueryLogConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: AssociateResolverQueryLogConfigXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateResolverQueryLogConfigRequest:
    headers: AssociateResolverQueryLogConfigHeaders = field(default=None)
    request: shared.AssociateResolverQueryLogConfigRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateResolverQueryLogConfigResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    associate_resolver_query_log_config_response: Optional[shared.AssociateResolverQueryLogConfigResponse] = field(default=None)
    content_type: str = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    resource_exists_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
