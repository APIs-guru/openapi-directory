from dataclasses import dataclass, field



@dataclass
class DeleteChargeStationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteChargeStationRequest:
    path_params: DeleteChargeStationPathParams = field(default=None)
    

@dataclass
class DeleteChargeStationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
