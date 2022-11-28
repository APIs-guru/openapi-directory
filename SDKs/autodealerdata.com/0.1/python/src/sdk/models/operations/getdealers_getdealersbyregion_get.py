from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDealersGetDealersByRegionGetQueryParams:
    jwt: str = field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    region_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'regionName', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDealersGetDealersByRegionGetRequest:
    query_params: GetDealersGetDealersByRegionGetQueryParams = field()
    

@dataclass
class GetDealersGetDealersByRegionGetResponse:
    content_type: str = field()
    status_code: int = field()
    dealership_data_paginated_resp: Optional[shared.DealershipDataPaginatedResp] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
