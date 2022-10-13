from dataclasses import dataclass, field



@dataclass
class GetVehicleOdometerPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVehicleOdometerRequest:
    path_params: GetVehicleOdometerPathParams = field(default=None)
    

@dataclass
class GetVehicleOdometerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
