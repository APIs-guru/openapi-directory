from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAvailablePhpVersionsPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAvailablePhpVersionsQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAvailablePhpVersionsRequest:
    path_params: GetAvailablePhpVersionsPathParams = field()
    query_params: GetAvailablePhpVersionsQueryParams = field()
    

@dataclass
class GetAvailablePhpVersionsResponse:
    content_type: str = field()
    status_code: int = field()
    php_versions: Optional[List[shared.PhpVersion]] = field(default=None)
    
