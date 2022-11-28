from dataclasses import dataclass, field



@dataclass
class GetVehicleLocationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVehicleLocationRequest:
    path_params: GetVehicleLocationPathParams = field()
    

@dataclass
class GetVehicleLocationResponse:
    content_type: str = field()
    status_code: int = field()
    
