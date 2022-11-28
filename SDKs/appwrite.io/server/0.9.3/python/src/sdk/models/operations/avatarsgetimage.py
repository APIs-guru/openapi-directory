from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AvatarsGetImageQueryParams:
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class AvatarsGetImageSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AvatarsGetImageRequest:
    query_params: AvatarsGetImageQueryParams = field()
    security: AvatarsGetImageSecurity = field()
    

@dataclass
class AvatarsGetImageResponse:
    content_type: str = field()
    status_code: int = field()
    
