from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class AvatarsGetFaviconQueryParams:
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class AvatarsGetFaviconSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AvatarsGetFaviconRequest:
    query_params: AvatarsGetFaviconQueryParams = field()
    security: AvatarsGetFaviconSecurity = field()
    

@dataclass
class AvatarsGetFaviconResponse:
    content_type: str = field()
    status_code: int = field()
    
