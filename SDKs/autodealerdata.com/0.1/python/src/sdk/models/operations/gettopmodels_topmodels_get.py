from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTopModelsTopModelsGetQueryParams:
    jwt: str = field(default=None, metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTopModelsTopModelsGetRequest:
    query_params: GetTopModelsTopModelsGetQueryParams = field(default=None)
    

@dataclass
class GetTopModelsTopModelsGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    top_model_resp: Optional[shared.TopModelResp] = field(default=None)
    
