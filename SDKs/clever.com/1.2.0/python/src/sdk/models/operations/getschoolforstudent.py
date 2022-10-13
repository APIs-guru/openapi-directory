from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSchoolForStudentPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSchoolForStudentRequest:
    path_params: GetSchoolForStudentPathParams = field(default=None)
    

@dataclass
class GetSchoolForStudentResponse:
    content_type: str = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    school_response: Optional[shared.SchoolResponse] = field(default=None)
    status_code: int = field(default=None)
    
