from dataclasses import dataclass, field



@dataclass
class GetVehicleOdometerPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVehicleOdometerRequest:
    path_params: GetVehicleOdometerPathParams = field()
    

@dataclass
class GetVehicleOdometerResponse:
    content_type: str = field()
    status_code: int = field()
    
