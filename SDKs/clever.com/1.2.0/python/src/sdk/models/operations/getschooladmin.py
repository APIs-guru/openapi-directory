from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSchoolAdminPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSchoolAdminQueryParams:
    include: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSchoolAdminRequest:
    path_params: GetSchoolAdminPathParams = field(default=None)
    query_params: GetSchoolAdminQueryParams = field(default=None)
    

@dataclass
class GetSchoolAdminResponse:
    content_type: str = field(default=None)
    not_found: Optional[shared.NotFound] = field(default=None)
    school_admin_response: Optional[shared.SchoolAdminResponse] = field(default=None)
    status_code: int = field(default=None)
    
