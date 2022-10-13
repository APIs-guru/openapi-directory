from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfigureSSHPathParams:
    domain_name: str = field(default=None, metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfigureSSHQueryParams:
    domain_name: str = field(default=None, metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfigureSSHRequest:
    path_params: ConfigureSSHPathParams = field(default=None)
    query_params: ConfigureSSHQueryParams = field(default=None)
    request: Optional[shared.SSHConfiguration] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConfigureSSHResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
