from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AvatarsGetQrQueryParams:
    text: str = field(metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    download: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'download', 'style': 'form', 'explode': True }})
    margin: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'margin', 'style': 'form', 'explode': True }})
    size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass
class AvatarsGetQrSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AvatarsGetQrRequest:
    query_params: AvatarsGetQrQueryParams = field()
    security: AvatarsGetQrSecurity = field()
    

@dataclass
class AvatarsGetQrResponse:
    content_type: str = field()
    status_code: int = field()
    
