from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AvatarsGetBrowserPathParams:
    code: str = field(default=None, metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    

@dataclass
class AvatarsGetBrowserQueryParams:
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    quality: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class AvatarsGetBrowserSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AvatarsGetBrowserRequest:
    path_params: AvatarsGetBrowserPathParams = field(default=None)
    query_params: AvatarsGetBrowserQueryParams = field(default=None)
    security: AvatarsGetBrowserSecurity = field(default=None)
    

@dataclass
class AvatarsGetBrowserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
