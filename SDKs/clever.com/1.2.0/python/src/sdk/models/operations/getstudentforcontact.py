from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStudentForContactPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudentForContactRequest:
    path_params: GetStudentForContactPathParams = field()
    

@dataclass
class GetStudentForContactResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    student_response: Optional[shared.StudentResponse] = field(default=None)
    
