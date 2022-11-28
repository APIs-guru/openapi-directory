from dataclasses import dataclass, field



@dataclass
class GetVehicleChargePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVehicleChargeRequest:
    path_params: GetVehicleChargePathParams = field()
    

@dataclass
class GetVehicleChargeResponse:
    content_type: str = field()
    status_code: int = field()
    
