from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfigureFtpPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfigureFtpQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfigureFtpRequest:
    path_params: ConfigureFtpPathParams = field(default=None)
    query_params: ConfigureFtpQueryParams = field(default=None)
    request: Optional[shared.FtpConfiguration] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConfigureFtpResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
