from dataclasses import dataclass, field



@dataclass
class GetVehicleBatteryPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVehicleBatteryRequest:
    path_params: GetVehicleBatteryPathParams = field(default=None)
    

@dataclass
class GetVehicleBatteryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
