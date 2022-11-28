from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChangeLetsEncryptPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    hostname: str = field(metadata={'path_param': { 'field_name': 'hostname', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangeLetsEncryptQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ChangeLetsEncryptRequest:
    path_params: ChangeLetsEncryptPathParams = field()
    query_params: ChangeLetsEncryptQueryParams = field()
    request: Optional[shared.LetsEncryptConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangeLetsEncryptResponse:
    content_type: str = field()
    status_code: int = field()
    
