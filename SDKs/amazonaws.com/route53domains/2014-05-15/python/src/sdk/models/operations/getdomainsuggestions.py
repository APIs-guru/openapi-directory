from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetDomainSuggestionsXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_GET_DOMAIN_SUGGESTIONS = "Route53Domains_v20140515.GetDomainSuggestions"


@dataclass
class GetDomainSuggestionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetDomainSuggestionsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetDomainSuggestionsRequest:
    headers: GetDomainSuggestionsHeaders = field(default=None)
    request: shared.GetDomainSuggestionsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetDomainSuggestionsResponse:
    content_type: str = field(default=None)
    get_domain_suggestions_response: Optional[shared.GetDomainSuggestionsResponse] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_tld: Optional[Any] = field(default=None)
    
