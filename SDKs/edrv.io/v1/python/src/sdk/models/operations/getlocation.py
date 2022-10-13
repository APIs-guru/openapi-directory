from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetLocationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLocationQueryParams:
    include_chargestations: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_chargestations', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLocationRequest:
    path_params: GetLocationPathParams = field(default=None)
    query_params: GetLocationQueryParams = field(default=None)
    

@dataclass
class GetLocationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
