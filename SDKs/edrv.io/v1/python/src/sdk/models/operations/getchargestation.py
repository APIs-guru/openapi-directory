from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetChargeStationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChargeStationQueryParams:
    include_evses: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_evses', 'style': 'form', 'explode': True }})
    include_location: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_location', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChargeStationRequest:
    path_params: GetChargeStationPathParams = field()
    query_params: GetChargeStationQueryParams = field()
    

@dataclass
class GetChargeStationResponse:
    content_type: str = field()
    status_code: int = field()
    
