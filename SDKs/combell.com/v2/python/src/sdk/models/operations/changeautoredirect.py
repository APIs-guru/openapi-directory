from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChangeAutoRedirectPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    hostname: str = field(default=None, metadata={'path_param': { 'field_name': 'hostname', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangeAutoRedirectQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ChangeAutoRedirectRequest:
    path_params: ChangeAutoRedirectPathParams = field(default=None)
    query_params: ChangeAutoRedirectQueryParams = field(default=None)
    request: Optional[shared.AutoRedirectConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangeAutoRedirectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
