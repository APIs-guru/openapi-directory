from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetResolverRulePolicyXAmzTargetEnum(str, Enum):
    ROUTE53_RESOLVER_GET_RESOLVER_RULE_POLICY = "Route53Resolver.GetResolverRulePolicy"


@dataclass
class GetResolverRulePolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetResolverRulePolicyXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetResolverRulePolicyRequest:
    headers: GetResolverRulePolicyHeaders = field(default=None)
    request: shared.GetResolverRulePolicyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetResolverRulePolicyResponse:
    content_type: str = field(default=None)
    get_resolver_rule_policy_response: Optional[shared.GetResolverRulePolicyResponse] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unknown_resource_exception: Optional[Any] = field(default=None)
    
