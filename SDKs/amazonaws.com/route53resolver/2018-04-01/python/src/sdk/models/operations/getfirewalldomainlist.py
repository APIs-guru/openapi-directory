from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class GetFirewallDomainListXAmzTargetEnum(str, Enum):
    ROUTE53_RESOLVER_GET_FIREWALL_DOMAIN_LIST = "Route53Resolver.GetFirewallDomainList"


@dataclass
class GetFirewallDomainListHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetFirewallDomainListXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFirewallDomainListRequest:
    headers: GetFirewallDomainListHeaders = field(default=None)
    request: shared.GetFirewallDomainListRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetFirewallDomainListResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_firewall_domain_list_response: Optional[shared.GetFirewallDomainListResponse] = field(default=None)
    internal_service_error_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
