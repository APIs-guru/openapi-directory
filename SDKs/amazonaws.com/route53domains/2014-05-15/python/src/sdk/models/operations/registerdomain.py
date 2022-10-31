from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RegisterDomainXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_REGISTER_DOMAIN = "Route53Domains_v20140515.RegisterDomain"


@dataclass
class RegisterDomainHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RegisterDomainXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RegisterDomainRequest:
    headers: RegisterDomainHeaders = field(default=None)
    request: shared.RegisterDomainRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RegisterDomainResponse:
    content_type: str = field(default=None)
    domain_limit_exceeded: Optional[Any] = field(default=None)
    duplicate_request: Optional[Any] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    operation_limit_exceeded: Optional[Any] = field(default=None)
    register_domain_response: Optional[shared.RegisterDomainResponse] = field(default=None)
    status_code: int = field(default=None)
    tld_rules_violation: Optional[Any] = field(default=None)
    unsupported_tld: Optional[Any] = field(default=None)
    
