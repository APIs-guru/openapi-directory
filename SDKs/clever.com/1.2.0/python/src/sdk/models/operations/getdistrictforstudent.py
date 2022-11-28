from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDistrictForStudentPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictForStudentRequest:
    path_params: GetDistrictForStudentPathParams = field()
    

@dataclass
class GetDistrictForStudentResponse:
    content_type: str = field()
    status_code: int = field()
    district_response: Optional[shared.DistrictResponse] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
