from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSchoolForTeacherPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSchoolForTeacherRequest:
    path_params: GetSchoolForTeacherPathParams = field(default=None)
    

@dataclass
class GetSchoolForTeacherResponse:
    content_type: str = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    school_response: Optional[shared.SchoolResponse] = field(default=None)
    status_code: int = field(default=None)
    
