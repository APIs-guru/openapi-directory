from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class AssociateFirewallPolicyXAmzTargetEnum(str, Enum):
    NETWORK_FIREWALL_20201112_ASSOCIATE_FIREWALL_POLICY = "NetworkFirewall_20201112.AssociateFirewallPolicy"


@dataclass
class AssociateFirewallPolicyHeaders:
    x_amz_target: AssociateFirewallPolicyXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateFirewallPolicyRequest:
    headers: AssociateFirewallPolicyHeaders = field()
    request: shared.AssociateFirewallPolicyRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateFirewallPolicyResponse:
    content_type: str = field()
    status_code: int = field()
    associate_firewall_policy_response: Optional[shared.AssociateFirewallPolicyResponse] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_operation_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    invalid_token_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    
