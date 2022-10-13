from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AvatarsGetCreditCardPathParams:
    code: str = field(default=None, metadata={'path_param': { 'field_name': 'code', 'style': 'simple', 'explode': False }})
    

@dataclass
class AvatarsGetCreditCardQueryParams:
    height: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'height', 'style': 'form', 'explode': True }})
    quality: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'quality', 'style': 'form', 'explode': True }})
    width: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'width', 'style': 'form', 'explode': True }})
    

@dataclass
class AvatarsGetCreditCardSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    key: shared.SchemeKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AvatarsGetCreditCardRequest:
    path_params: AvatarsGetCreditCardPathParams = field(default=None)
    query_params: AvatarsGetCreditCardQueryParams = field(default=None)
    security: AvatarsGetCreditCardSecurity = field(default=None)
    

@dataclass
class AvatarsGetCreditCardResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
