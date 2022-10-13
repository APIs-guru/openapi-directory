from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams:
    brand_name: str = field(default=None, metadata={'query_param': { 'field_name': 'brandName', 'style': 'form', 'explode': True }})
    jwt: str = field(default=None, metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRegionBrandMarketShareGetRegionBrandMarketShareGetRequest:
    query_params: GetRegionBrandMarketShareGetRegionBrandMarketShareGetQueryParams = field(default=None)
    

@dataclass
class GetRegionBrandMarketShareGetRegionBrandMarketShareGetResponse:
    content_type: str = field(default=None)
    generic_response: Optional[shared.GenericResponse] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
