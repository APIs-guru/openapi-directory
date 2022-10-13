from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AvatarsGetImageQueryParams:
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    url: str = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class AvatarsGetImageSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AvatarsGetImageRequest:
    query_params: AvatarsGetImageQueryParams = field(default=None)
    security: AvatarsGetImageSecurity = field(default=None)
    

@dataclass
class AvatarsGetImageResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
