from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EstimationAPIDetailsQueryParams:
    id: int = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class EstimationAPIDetailsHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class EstimationAPIDetailsRequest:
    query_params: EstimationAPIDetailsQueryParams = field(default=None)
    headers: EstimationAPIDetailsHeaders = field(default=None)
    

@dataclass
class EstimationAPIDetailsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    estimation_full_details_api_model: Optional[shared.EstimationFullDetailsAPIModel] = field(default=None)
    status_code: int = field(default=None)
    
