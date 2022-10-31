from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared

class ListTagsForDomainXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_LIST_TAGS_FOR_DOMAIN = "Route53Domains_v20140515.ListTagsForDomain"


@dataclass
class ListTagsForDomainHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListTagsForDomainXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListTagsForDomainRequest:
    headers: ListTagsForDomainHeaders = field(default=None)
    request: shared.ListTagsForDomainRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListTagsForDomainResponse:
    content_type: str = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    list_tags_for_domain_response: Optional[shared.ListTagsForDomainResponse] = field(default=None)
    operation_limit_exceeded: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_tld: Optional[Any] = field(default=None)
    
