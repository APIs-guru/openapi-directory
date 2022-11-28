from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AvatarsGetInitialsQueryParams:
    background: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'background', 'style': 'form', 'explode': True }})
    color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class AvatarsGetInitialsSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AvatarsGetInitialsRequest:
    query_params: AvatarsGetInitialsQueryParams = field()
    security: AvatarsGetInitialsSecurity = field()
    

@dataclass
class AvatarsGetInitialsResponse:
    content_type: str = field()
    status_code: int = field()
    
