from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfigureAntiSpamPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfigureAntiSpamQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfigureAntiSpamRequest:
    path_params: ConfigureAntiSpamPathParams = field(default=None)
    query_params: ConfigureAntiSpamQueryParams = field(default=None)
    request: Optional[shared.UpdateAntiSpamRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConfigureAntiSpamResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
