from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStudentsForTeacherPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudentsForTeacherQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudentsForTeacherRequest:
    path_params: GetStudentsForTeacherPathParams = field(default=None)
    query_params: GetStudentsForTeacherQueryParams = field(default=None)
    

@dataclass
class GetStudentsForTeacherResponse:
    content_type: str = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    status_code: int = field(default=None)
    students_response: Optional[shared.StudentsResponse] = field(default=None)
    
