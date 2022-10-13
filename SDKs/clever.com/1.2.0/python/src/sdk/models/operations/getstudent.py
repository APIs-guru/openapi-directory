from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStudentPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudentQueryParams:
    include: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudentRequest:
    path_params: GetStudentPathParams = field(default=None)
    query_params: GetStudentQueryParams = field(default=None)
    

@dataclass
class GetStudentResponse:
    content_type: str = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    status_code: int = field(default=None)
    student_response: Optional[shared.StudentResponse] = field(default=None)
    
