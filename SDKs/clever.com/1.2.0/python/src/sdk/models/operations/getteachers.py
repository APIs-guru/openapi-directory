from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTeachersQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    where: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'where', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTeachersRequest:
    query_params: GetTeachersQueryParams = field(default=None)
    

@dataclass
class GetTeachersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    teachers_response: Optional[shared.TeachersResponse] = field(default=None)
    
