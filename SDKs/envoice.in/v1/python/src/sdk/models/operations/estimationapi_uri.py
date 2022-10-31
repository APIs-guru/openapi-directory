from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EstimationAPIURIQueryParams:
    id: int = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class EstimationAPIURIHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class EstimationAPIURIRequest:
    query_params: EstimationAPIURIQueryParams = field(default=None)
    headers: EstimationAPIURIHeaders = field(default=None)
    

@dataclass
class EstimationAPIURIResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    estimation_uri_api_model: Optional[shared.EstimationURIAPIModel] = field(default=None)
    status_code: int = field(default=None)
    
