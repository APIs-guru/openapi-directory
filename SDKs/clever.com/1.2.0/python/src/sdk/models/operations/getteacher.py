from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeacherPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeacherQueryParams:
    include: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeacherRequest:
    path_params: GetTeacherPathParams = field()
    query_params: GetTeacherQueryParams = field()
    

@dataclass
class GetTeacherResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    teacher_response: Optional[shared.TeacherResponse] = field(default=None)
    
