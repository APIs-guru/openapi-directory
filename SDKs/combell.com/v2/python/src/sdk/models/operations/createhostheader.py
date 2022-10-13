from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateHostHeaderPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    site_name: str = field(default=None, metadata={'path_param': { 'field_name': 'siteName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateHostHeaderQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    site_name: str = field(default=None, metadata={'query_param': { 'field_name': 'site_name', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateHostHeaderRequest:
    path_params: CreateHostHeaderPathParams = field(default=None)
    query_params: CreateHostHeaderQueryParams = field(default=None)
    request: Optional[shared.AddHostHeaderRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateHostHeaderResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
