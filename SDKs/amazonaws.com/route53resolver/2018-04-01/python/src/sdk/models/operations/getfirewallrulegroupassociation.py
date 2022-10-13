from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetFirewallRuleGroupAssociationXAmzTargetEnum(str, Enum):
    ROUTE53_RESOLVER_GET_FIREWALL_RULE_GROUP_ASSOCIATION = "Route53Resolver.GetFirewallRuleGroupAssociation"


@dataclass
class GetFirewallRuleGroupAssociationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetFirewallRuleGroupAssociationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetFirewallRuleGroupAssociationRequest:
    headers: GetFirewallRuleGroupAssociationHeaders = field(default=None)
    request: shared.GetFirewallRuleGroupAssociationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetFirewallRuleGroupAssociationResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_firewall_rule_group_association_response: Optional[shared.GetFirewallRuleGroupAssociationResponse] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
