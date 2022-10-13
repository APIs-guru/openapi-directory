from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeacherForSectionPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeacherForSectionRequest:
    path_params: GetTeacherForSectionPathParams = field(default=None)
    

@dataclass
class GetTeacherForSectionResponse:
    content_type: str = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    status_code: int = field(default=None)
    teacher_response: Optional[shared.TeacherResponse] = field(default=None)
    
