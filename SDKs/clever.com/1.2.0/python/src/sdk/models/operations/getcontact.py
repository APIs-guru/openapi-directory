from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetContactPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContactRequest:
    path_params: GetContactPathParams = field(default=None)
    

@dataclass
class GetContactResponse:
    content_type: str = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    status_code: int = field(default=None)
    student_contact_response: Optional[shared.StudentContactResponse] = field(default=None)
    
