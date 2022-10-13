from dataclasses import dataclass, field



@dataclass
class GetVehicleLocationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVehicleLocationRequest:
    path_params: GetVehicleLocationPathParams = field(default=None)
    

@dataclass
class GetVehicleLocationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
