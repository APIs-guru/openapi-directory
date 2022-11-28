from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetOrganizationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOrganizationQueryParams:
    include_locations: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_locations', 'style': 'form', 'explode': True }})
    

@dataclass
class GetOrganizationRequest:
    path_params: GetOrganizationPathParams = field()
    query_params: GetOrganizationQueryParams = field()
    

@dataclass
class GetOrganizationResponse:
    content_type: str = field()
    status_code: int = field()
    
