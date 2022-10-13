from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAPIV1DonationsCarbonStatsQueryParams:
    id: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIV1DonationsCarbonStatsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetAPIV1DonationsCarbonStatsRequest:
    query_params: GetAPIV1DonationsCarbonStatsQueryParams = field(default=None)
    security: GetAPIV1DonationsCarbonStatsSecurity = field(default=None)
    

@dataclass
class GetAPIV1DonationsCarbonStatsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
