from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDistrictAdminPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictAdminRequest:
    path_params: GetDistrictAdminPathParams = field()
    

@dataclass
class GetDistrictAdminResponse:
    content_type: str = field()
    status_code: int = field()
    district_admin_response: Optional[shared.DistrictAdminResponse] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
