from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDealersGetDealersGetQueryParams:
    jwt: str = field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    zip_code: int = field(metadata={'query_param': { 'field_name': 'zipCode', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDealersGetDealersGetRequest:
    query_params: GetDealersGetDealersGetQueryParams = field()
    

@dataclass
class GetDealersGetDealersGetResponse:
    content_type: str = field()
    status_code: int = field()
    dealership_data_resp: Optional[shared.DealershipDataResp] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
