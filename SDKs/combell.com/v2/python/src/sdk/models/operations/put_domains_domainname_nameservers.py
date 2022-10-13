from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutDomainsDomainNameNameserversPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutDomainsDomainNameNameserversQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class PutDomainsDomainNameNameserversRequest:
    path_params: PutDomainsDomainNameNameserversPathParams = field(default=None)
    query_params: PutDomainsDomainNameNameserversQueryParams = field(default=None)
    request: Optional[shared.EditNameServers] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutDomainsDomainNameNameserversResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
