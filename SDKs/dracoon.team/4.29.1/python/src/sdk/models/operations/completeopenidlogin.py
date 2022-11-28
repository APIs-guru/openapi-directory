from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompleteOpenIDLoginQueryParams:
    code: str = field(metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    state: str = field(metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    id_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id_token', 'style': 'form', 'explode': True }})
    

@dataclass
class CompleteOpenIDLoginRequest:
    query_params: CompleteOpenIDLoginQueryParams = field()
    

@dataclass
class CompleteOpenIDLoginResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    login_response: Optional[shared.LoginResponse] = field(default=None)
    
