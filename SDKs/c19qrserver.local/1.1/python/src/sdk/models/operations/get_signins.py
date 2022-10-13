from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSigninsQueryParams:
    less_than: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'less_than', 'style': 'form', 'explode': True }})
    return_count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'return_count', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSigninsRequest:
    query_params: GetSigninsQueryParams = field(default=None)
    

@dataclass
class GetSigninsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    key_failure: Optional[shared.KeyFailure] = field(default=None)
    signins: Optional[List[shared.Signin]] = field(default=None)
    
