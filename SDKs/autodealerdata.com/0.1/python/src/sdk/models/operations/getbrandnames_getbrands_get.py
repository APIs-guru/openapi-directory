from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBrandNamesGetBrandsGetQueryParams:
    jwt: str = field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBrandNamesGetBrandsGetRequest:
    query_params: GetBrandNamesGetBrandsGetQueryParams = field()
    

@dataclass
class GetBrandNamesGetBrandsGetResponse:
    content_type: str = field()
    status_code: int = field()
    brand_resp: Optional[shared.BrandResp] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
