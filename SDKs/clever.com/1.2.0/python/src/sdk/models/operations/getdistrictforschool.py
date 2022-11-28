from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDistrictForSchoolPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictForSchoolRequest:
    path_params: GetDistrictForSchoolPathParams = field()
    

@dataclass
class GetDistrictForSchoolResponse:
    content_type: str = field()
    status_code: int = field()
    district_response: Optional[shared.DistrictResponse] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
