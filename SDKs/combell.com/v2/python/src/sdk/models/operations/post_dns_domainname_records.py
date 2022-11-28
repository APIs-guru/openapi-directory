from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostDNSDomainNameRecordsPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostDNSDomainNameRecordsQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class PostDNSDomainNameRecordsRequest:
    path_params: PostDNSDomainNameRecordsPathParams = field()
    query_params: PostDNSDomainNameRecordsQueryParams = field()
    request: Optional[shared.DNSRecord] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostDNSDomainNameRecordsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
