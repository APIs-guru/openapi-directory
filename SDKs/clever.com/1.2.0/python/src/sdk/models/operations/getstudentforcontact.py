from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStudentForContactPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudentForContactRequest:
    path_params: GetStudentForContactPathParams = field(default=None)
    

@dataclass
class GetStudentForContactResponse:
    content_type: str = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    status_code: int = field(default=None)
    student_response: Optional[shared.StudentResponse] = field(default=None)
    
