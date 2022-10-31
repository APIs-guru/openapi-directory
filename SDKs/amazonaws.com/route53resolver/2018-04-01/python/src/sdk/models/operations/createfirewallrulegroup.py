from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateFirewallRuleGroupXAmzTargetEnum(str, Enum):
    ROUTE53_RESOLVER_CREATE_FIREWALL_RULE_GROUP = "Route53Resolver.CreateFirewallRuleGroup"


@dataclass
class CreateFirewallRuleGroupHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateFirewallRuleGroupXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateFirewallRuleGroupRequest:
    headers: CreateFirewallRuleGroupHeaders = field(default=None)
    request: shared.CreateFirewallRuleGroupRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFirewallRuleGroupResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_firewall_rule_group_response: Optional[shared.CreateFirewallRuleGroupResponse] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
