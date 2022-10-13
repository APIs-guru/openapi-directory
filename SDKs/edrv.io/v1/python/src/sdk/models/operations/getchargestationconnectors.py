from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetChargeStationConnectorsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChargeStationConnectorsQueryParams:
    include_evse: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_evse', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChargeStationConnectorsRequest:
    path_params: GetChargeStationConnectorsPathParams = field(default=None)
    query_params: GetChargeStationConnectorsQueryParams = field(default=None)
    

@dataclass
class GetChargeStationConnectorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
