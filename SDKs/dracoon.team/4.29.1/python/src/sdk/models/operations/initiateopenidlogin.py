from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InitiateOpenIDLoginQueryParams:
    issuer: str = field(default=None, metadata={'query_param': { 'field_name': 'issuer', 'style': 'form', 'explode': True }})
    language: str = field(default=None, metadata={'query_param': { 'field_name': 'language', 'style': 'form', 'explode': True }})
    redirect_uri: str = field(default=None, metadata={'query_param': { 'field_name': 'redirect_uri', 'style': 'form', 'explode': True }})
    test: bool = field(default=None, metadata={'query_param': { 'field_name': 'test', 'style': 'form', 'explode': True }})
    

@dataclass
class InitiateOpenIDLoginRequest:
    query_params: InitiateOpenIDLoginQueryParams = field(default=None)
    

@dataclass
class InitiateOpenIDLoginResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    
