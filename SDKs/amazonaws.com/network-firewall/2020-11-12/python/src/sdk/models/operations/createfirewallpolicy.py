from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateFirewallPolicyXAmzTargetEnum(str, Enum):
    NETWORK_FIREWALL_20201112_CREATE_FIREWALL_POLICY = "NetworkFirewall_20201112.CreateFirewallPolicy"


@dataclass
class CreateFirewallPolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateFirewallPolicyXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateFirewallPolicyRequest:
    headers: CreateFirewallPolicyHeaders = field(default=None)
    request: shared.CreateFirewallPolicyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateFirewallPolicyResponse:
    content_type: str = field(default=None)
    create_firewall_policy_response: Optional[shared.CreateFirewallPolicyResponse] = field(default=None)
    insufficient_capacity_exception: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
