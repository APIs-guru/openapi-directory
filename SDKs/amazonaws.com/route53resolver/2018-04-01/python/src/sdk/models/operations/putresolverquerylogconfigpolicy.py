from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutResolverQueryLogConfigPolicyXAmzTargetEnum(str, Enum):
    ROUTE53_RESOLVER_PUT_RESOLVER_QUERY_LOG_CONFIG_POLICY = "Route53Resolver.PutResolverQueryLogConfigPolicy"


@dataclass
class PutResolverQueryLogConfigPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PutResolverQueryLogConfigPolicyXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutResolverQueryLogConfigPolicyRequest:
    headers: PutResolverQueryLogConfigPolicyHeaders = field(default=None)
    request: shared.PutResolverQueryLogConfigPolicyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutResolverQueryLogConfigPolicyResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_policy_document: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    put_resolver_query_log_config_policy_response: Optional[shared.PutResolverQueryLogConfigPolicyResponse] = field(default=None)
    status_code: int = field(default=None)
    unknown_resource_exception: Optional[Any] = field(default=None)
    
