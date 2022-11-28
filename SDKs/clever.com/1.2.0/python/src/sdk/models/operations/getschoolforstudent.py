from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSchoolForStudentPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSchoolForStudentRequest:
    path_params: GetSchoolForStudentPathParams = field()
    

@dataclass
class GetSchoolForStudentResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    school_response: Optional[shared.SchoolResponse] = field(default=None)
    
