from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetDomainDetailXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_GET_DOMAIN_DETAIL = "Route53Domains_v20140515.GetDomainDetail"


@dataclass
class GetDomainDetailHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetDomainDetailXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainDetailRequest:
    headers: GetDomainDetailHeaders = field(default=None)
    request: shared.GetDomainDetailRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDomainDetailResponse:
    content_type: str = field(default=None)
    get_domain_detail_response: Optional[shared.GetDomainDetailResponse] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_tld: Optional[Any] = field(default=None)
    
