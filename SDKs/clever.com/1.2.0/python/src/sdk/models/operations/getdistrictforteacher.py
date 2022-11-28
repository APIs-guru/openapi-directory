from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDistrictForTeacherPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictForTeacherRequest:
    path_params: GetDistrictForTeacherPathParams = field()
    

@dataclass
class GetDistrictForTeacherResponse:
    content_type: str = field()
    status_code: int = field()
    district_response: Optional[shared.DistrictResponse] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
