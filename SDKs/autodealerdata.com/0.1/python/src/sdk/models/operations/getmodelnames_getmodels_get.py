from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetModelNamesGetModelsGetQueryParams:
    brand_name: str = field(metadata={'query_param': { 'field_name': 'brandName', 'style': 'form', 'explode': True }})
    jwt: str = field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModelNamesGetModelsGetRequest:
    query_params: GetModelNamesGetModelsGetQueryParams = field()
    

@dataclass
class GetModelNamesGetModelsGetResponse:
    content_type: str = field()
    status_code: int = field()
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    model_resp: Optional[shared.ModelResp] = field(default=None)
    
