from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDomainsDomainNamePathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainsDomainNameQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainsDomainNameRequest:
    path_params: GetDomainsDomainNamePathParams = field()
    query_params: GetDomainsDomainNameQueryParams = field()
    

@dataclass
class GetDomainsDomainNameResponse:
    content_type: str = field()
    status_code: int = field()
    domain_detail: Optional[shared.DomainDetail] = field(default=None)
    
