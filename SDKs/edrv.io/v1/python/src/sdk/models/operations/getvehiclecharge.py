from dataclasses import dataclass, field



@dataclass
class GetVehicleChargePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVehicleChargeRequest:
    path_params: GetVehicleChargePathParams = field(default=None)
    

@dataclass
class GetVehicleChargeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
