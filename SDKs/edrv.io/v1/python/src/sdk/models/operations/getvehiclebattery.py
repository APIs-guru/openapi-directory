from dataclasses import dataclass, field



@dataclass
class GetVehicleBatteryPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVehicleBatteryRequest:
    path_params: GetVehicleBatteryPathParams = field()
    

@dataclass
class GetVehicleBatteryResponse:
    content_type: str = field()
    status_code: int = field()
    
