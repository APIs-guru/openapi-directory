from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetContactsForStudentPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContactsForStudentQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class GetContactsForStudentRequest:
    path_params: GetContactsForStudentPathParams = field(default=None)
    query_params: GetContactsForStudentQueryParams = field(default=None)
    

@dataclass
class GetContactsForStudentResponse:
    content_type: str = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    status_code: int = field(default=None)
    student_contacts_for_student_response: Optional[shared.StudentContactsForStudentResponse] = field(default=None)
    
