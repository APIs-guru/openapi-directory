from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfigureHttp2PathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    site_name: str = field(metadata={'path_param': { 'field_name': 'siteName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfigureHttp2QueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    site_name: str = field(metadata={'query_param': { 'field_name': 'site_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfigureHttp2Request:
    path_params: ConfigureHttp2PathParams = field()
    query_params: ConfigureHttp2QueryParams = field()
    request: Optional[shared.Http2Configuration] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConfigureHttp2Response:
    content_type: str = field()
    status_code: int = field()
    
