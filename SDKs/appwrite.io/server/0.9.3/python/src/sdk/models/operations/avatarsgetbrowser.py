from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AvatarsGetBrowserPathParams:
    code: str = field(metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    

@dataclass
class AvatarsGetBrowserQueryParams:
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    quality: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class AvatarsGetBrowserSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AvatarsGetBrowserRequest:
    path_params: AvatarsGetBrowserPathParams = field()
    query_params: AvatarsGetBrowserQueryParams = field()
    security: AvatarsGetBrowserSecurity = field()
    

@dataclass
class AvatarsGetBrowserResponse:
    content_type: str = field()
    status_code: int = field()
    
