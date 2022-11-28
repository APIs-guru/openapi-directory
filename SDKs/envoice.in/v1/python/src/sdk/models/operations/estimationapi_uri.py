from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EstimationAPIURIQueryParams:
    id: int = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class EstimationAPIURIHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class EstimationAPIURIRequest:
    headers: EstimationAPIURIHeaders = field()
    query_params: EstimationAPIURIQueryParams = field()
    

@dataclass
class EstimationAPIURIResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    estimation_uri_api_model: Optional[shared.EstimationURIAPIModel] = field(default=None)
    
