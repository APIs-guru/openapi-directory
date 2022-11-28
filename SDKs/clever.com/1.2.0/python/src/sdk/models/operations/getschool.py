from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSchoolPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSchoolRequest:
    path_params: GetSchoolPathParams = field()
    

@dataclass
class GetSchoolResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    school_response: Optional[shared.SchoolResponse] = field(default=None)
    
