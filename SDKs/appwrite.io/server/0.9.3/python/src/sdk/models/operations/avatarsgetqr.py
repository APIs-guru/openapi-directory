from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AvatarsGetQrQueryParams:
    download: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'download', 'style': 'form', 'explode': True }})
    margin: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'margin', 'style': 'form', 'explode': True }})
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    text: str = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclass
class AvatarsGetQrSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AvatarsGetQrRequest:
    query_params: AvatarsGetQrQueryParams = field(default=None)
    security: AvatarsGetQrSecurity = field(default=None)
    

@dataclass
class AvatarsGetQrResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
