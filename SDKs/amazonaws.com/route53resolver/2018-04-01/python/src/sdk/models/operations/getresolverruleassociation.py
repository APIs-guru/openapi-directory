from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetResolverRuleAssociationXAmzTargetEnum(str, Enum):
    ROUTE53_RESOLVER_GET_RESOLVER_RULE_ASSOCIATION = "Route53Resolver.GetResolverRuleAssociation"


@dataclass
class GetResolverRuleAssociationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetResolverRuleAssociationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetResolverRuleAssociationRequest:
    headers: GetResolverRuleAssociationHeaders = field(default=None)
    request: shared.GetResolverRuleAssociationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetResolverRuleAssociationResponse:
    content_type: str = field(default=None)
    get_resolver_rule_association_response: Optional[shared.GetResolverRuleAssociationResponse] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
