from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AvatarsGetFlagPathParams:
    code: str = field(metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    

@dataclass
class AvatarsGetFlagQueryParams:
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    quality: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class AvatarsGetFlagSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AvatarsGetFlagRequest:
    path_params: AvatarsGetFlagPathParams = field()
    query_params: AvatarsGetFlagQueryParams = field()
    security: AvatarsGetFlagSecurity = field()
    

@dataclass
class AvatarsGetFlagResponse:
    content_type: str = field()
    status_code: int = field()
    
