from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetVehiclePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVehicleQueryParams:
    include_driver: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_driver', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    include_token: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_token', 'style': 'form', 'explode': True }})
    

@dataclass
class GetVehicleRequest:
    path_params: GetVehiclePathParams = field(default=None)
    query_params: GetVehicleQueryParams = field(default=None)
    

@dataclass
class GetVehicleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
