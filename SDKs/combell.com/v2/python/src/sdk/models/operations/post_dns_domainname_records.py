from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostDNSDomainNameRecordsPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostDNSDomainNameRecordsQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class PostDNSDomainNameRecordsRequest:
    path_params: PostDNSDomainNameRecordsPathParams = field(default=None)
    query_params: PostDNSDomainNameRecordsQueryParams = field(default=None)
    request: Optional[shared.DNSRecord] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostDNSDomainNameRecordsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
