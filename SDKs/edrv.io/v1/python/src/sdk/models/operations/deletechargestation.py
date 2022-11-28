from dataclasses import dataclass, field



@dataclass
class DeleteChargeStationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteChargeStationRequest:
    path_params: DeleteChargeStationPathParams = field()
    

@dataclass
class DeleteChargeStationResponse:
    content_type: str = field()
    status_code: int = field()
    
