from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDistrictAdminPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictAdminRequest:
    path_params: GetDistrictAdminPathParams = field(default=None)
    

@dataclass
class GetDistrictAdminResponse:
    content_type: str = field(default=None)
    district_admin_response: Optional[shared.DistrictAdminResponse] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    status_code: int = field(default=None)
    
