from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetReservationPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReservationQueryParams:
    include_chargestation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_chargestation', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReservationRequest:
    path_params: GetReservationPathParams = field()
    query_params: GetReservationQueryParams = field()
    

@dataclass
class GetReservationResponse:
    content_type: str = field()
    status_code: int = field()
    
