from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAdminsForDistrictPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAdminsForDistrictRequest:
    path_params: GetAdminsForDistrictPathParams = field(default=None)
    

@dataclass
class GetAdminsForDistrictResponse:
    content_type: str = field(default=None)
    district_admins_response: Optional[shared.DistrictAdminsResponse] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    status_code: int = field(default=None)
    
