from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetModelUsedDistModelYearDistGetQueryParams:
    brand_name: str = field(default=None, metadata={'query_param': { 'field_name': 'brandName', 'style': 'form', 'explode': True }})
    jwt: str = field(default=None, metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    model_name: str = field(default=None, metadata={'query_param': { 'field_name': 'modelName', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetModelUsedDistModelYearDistGetRequest:
    query_params: GetModelUsedDistModelYearDistGetQueryParams = field(default=None)
    

@dataclass
class GetModelUsedDistModelYearDistGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    model_year_dist_resp: Optional[shared.ModelYearDistResp] = field(default=None)
    status_code: int = field(default=None)
    
