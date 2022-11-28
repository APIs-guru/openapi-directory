from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChangePhpVersionPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangePhpVersionQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ChangePhpVersionRequest:
    path_params: ChangePhpVersionPathParams = field()
    query_params: ChangePhpVersionQueryParams = field()
    request: Optional[shared.PhpVersion] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangePhpVersionResponse:
    content_type: str = field()
    status_code: int = field()
    
