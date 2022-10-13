from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDomainsDomainNamePathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainsDomainNameQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainsDomainNameRequest:
    path_params: GetDomainsDomainNamePathParams = field(default=None)
    query_params: GetDomainsDomainNameQueryParams = field(default=None)
    

@dataclass
class GetDomainsDomainNameResponse:
    content_type: str = field(default=None)
    domain_detail: Optional[shared.DomainDetail] = field(default=None)
    status_code: int = field(default=None)
    
