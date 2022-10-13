from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetOrganizationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationQueryParams:
    include_locations: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_locations', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationRequest:
    path_params: GetOrganizationPathParams = field(default=None)
    query_params: GetOrganizationQueryParams = field(default=None)
    

@dataclass
class GetOrganizationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
