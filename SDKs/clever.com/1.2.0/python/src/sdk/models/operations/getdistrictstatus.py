from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDistrictStatusPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictStatusRequest:
    path_params: GetDistrictStatusPathParams = field(default=None)
    

@dataclass
class GetDistrictStatusResponse:
    content_type: str = field(default=None)
    district_status_responses: Optional[shared.DistrictStatusResponses] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    status_code: int = field(default=None)
    
