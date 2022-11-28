from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIV1DonationsCarbonStatsQueryParams:
    id: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1DonationsCarbonStatsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPIV1DonationsCarbonStatsRequest:
    query_params: GetAPIV1DonationsCarbonStatsQueryParams = field()
    security: GetAPIV1DonationsCarbonStatsSecurity = field()
    

@dataclass
class GetAPIV1DonationsCarbonStatsResponse:
    content_type: str = field()
    status_code: int = field()
    
