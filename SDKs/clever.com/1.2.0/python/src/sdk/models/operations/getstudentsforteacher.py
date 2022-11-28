from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStudentsForTeacherPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStudentsForTeacherQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStudentsForTeacherRequest:
    path_params: GetStudentsForTeacherPathParams = field()
    query_params: GetStudentsForTeacherQueryParams = field()
    

@dataclass
class GetStudentsForTeacherResponse:
    content_type: str = field()
    status_code: int = field()
    not_found: Optional[shared.NotFound] = field(default=None)
    students_response: Optional[shared.StudentsResponse] = field(default=None)
    
