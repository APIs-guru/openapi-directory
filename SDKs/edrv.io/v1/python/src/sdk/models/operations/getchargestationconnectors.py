from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetChargeStationConnectorsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChargeStationConnectorsQueryParams:
    include_evse: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_evse', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChargeStationConnectorsRequest:
    path_params: GetChargeStationConnectorsPathParams = field()
    query_params: GetChargeStationConnectorsQueryParams = field()
    

@dataclass
class GetChargeStationConnectorsResponse:
    content_type: str = field()
    status_code: int = field()
    
