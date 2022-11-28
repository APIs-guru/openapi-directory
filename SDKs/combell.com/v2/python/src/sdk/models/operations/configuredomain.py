from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfigureDomainPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfigureDomainQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfigureDomainRequest:
    path_params: ConfigureDomainPathParams = field()
    query_params: ConfigureDomainQueryParams = field()
    request: Optional[shared.EditDomainWillRenewRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConfigureDomainResponse:
    content_type: str = field()
    status_code: int = field()
    
