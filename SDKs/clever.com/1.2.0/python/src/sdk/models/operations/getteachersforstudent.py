from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeachersForStudentPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeachersForStudentQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeachersForStudentRequest:
    path_params: GetTeachersForStudentPathParams = field(default=None)
    query_params: GetTeachersForStudentQueryParams = field(default=None)
    

@dataclass
class GetTeachersForStudentResponse:
    content_type: str = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    status_code: int = field(default=None)
    teachers_response: Optional[shared.TeachersResponse] = field(default=None)
    
