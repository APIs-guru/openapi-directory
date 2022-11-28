from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDistrictPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDistrictQueryParams:
    include: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDistrictRequest:
    path_params: GetDistrictPathParams = field()
    query_params: GetDistrictQueryParams = field()
    

@dataclass
class GetDistrictResponse:
    content_type: str = field()
    status_code: int = field()
    district_response: Optional[shared.DistrictResponse] = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    
