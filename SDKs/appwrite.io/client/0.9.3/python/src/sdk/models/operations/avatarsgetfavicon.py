from dataclasses import dataclass, field



@dataclass
class AvatarsGetFaviconQueryParams:
    url: str = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class AvatarsGetFaviconSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AvatarsGetFaviconRequest:
    query_params: AvatarsGetFaviconQueryParams = field(default=None)
    security: AvatarsGetFaviconSecurity = field(default=None)
    

@dataclass
class AvatarsGetFaviconResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
