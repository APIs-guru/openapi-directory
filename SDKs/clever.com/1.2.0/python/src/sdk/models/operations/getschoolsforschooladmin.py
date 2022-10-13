from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSchoolsForSchoolAdminPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSchoolsForSchoolAdminQueryParams:
    ending_before: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_before', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    starting_after: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'starting_after', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSchoolsForSchoolAdminRequest:
    path_params: GetSchoolsForSchoolAdminPathParams = field(default=None)
    query_params: GetSchoolsForSchoolAdminQueryParams = field(default=None)
    

@dataclass
class GetSchoolsForSchoolAdminResponse:
    content_type: str = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    schools_response: Optional[shared.SchoolsResponse] = field(default=None)
    status_code: int = field(default=None)
    
