from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDealersGetDealersByIDGetQueryParams:
    dealer_id: int = field(metadata={'query_param': { 'field_name': 'dealerID', 'style': 'form', 'explode': True }})
    jwt: str = field(metadata={'query_param': { 'field_name': 'jwt', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDealersGetDealersByIDGetRequest:
    query_params: GetDealersGetDealersByIDGetQueryParams = field()
    

@dataclass
class GetDealersGetDealersByIDGetResponse:
    content_type: str = field()
    status_code: int = field()
    dealership_data_resp: Optional[shared.DealershipDataResp] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
