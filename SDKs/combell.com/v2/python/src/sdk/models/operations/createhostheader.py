from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class CreateHostHeaderPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    site_name: str = field(metadata={'path_param': { 'field_name': 'siteName', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateHostHeaderQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    site_name: str = field(metadata={'query_param': { 'field_name': 'site_name', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateHostHeaderRequest:
    path_params: CreateHostHeaderPathParams = field()
    query_params: CreateHostHeaderQueryParams = field()
    request: Optional[shared.AddHostHeaderRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateHostHeaderResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
