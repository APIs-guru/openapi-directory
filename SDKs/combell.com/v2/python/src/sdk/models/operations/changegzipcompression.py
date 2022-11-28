from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChangeGzipCompressionPathParams:
    domain_name: str = field(metadata={'path_param': { 'field_name': 'domainName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangeGzipCompressionQueryParams:
    domain_name: str = field(metadata={'query_param': { 'field_name': 'domain_name', 'style': 'form', 'explode': True }})
    

@dataclass
class ChangeGzipCompressionRequest:
    path_params: ChangeGzipCompressionPathParams = field()
    query_params: ChangeGzipCompressionQueryParams = field()
    request: Optional[shared.GzipConfig] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ChangeGzipCompressionResponse:
    content_type: str = field()
    status_code: int = field()
    
