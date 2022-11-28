from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAdminsForDistrictPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdminsForDistrictRequest:
    path_params: GetAdminsForDistrictPathParams = field()
    

@dataclass
class GetAdminsForDistrictResponse:
    content_type: str = field()
    status_code: int = field()
    district_admins_response: Optional[shared.DistrictAdminsResponse] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
