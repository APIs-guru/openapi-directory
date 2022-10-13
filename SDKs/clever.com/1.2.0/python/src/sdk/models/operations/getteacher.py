from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeacherPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeacherQueryParams:
    include: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeacherRequest:
    path_params: GetTeacherPathParams = field(default=None)
    query_params: GetTeacherQueryParams = field(default=None)
    

@dataclass
class GetTeacherResponse:
    content_type: str = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    status_code: int = field(default=None)
    teacher_response: Optional[shared.TeacherResponse] = field(default=None)
    
