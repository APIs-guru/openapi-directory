from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTransactionPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionQueryParams:
    include_chargestation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_chargestation', 'style': 'form', 'explode': True }})
    include_connector: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_connector', 'style': 'form', 'explode': True }})
    include_driver: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_driver', 'style': 'form', 'explode': True }})
    include_evse: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_evse', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    include_rate: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_rate', 'style': 'form', 'explode': True }})
    include_reservation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_reservation', 'style': 'form', 'explode': True }})
    include_token: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_token', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionRequest:
    path_params: GetTransactionPathParams = field()
    query_params: GetTransactionQueryParams = field()
    

@dataclass
class GetTransactionResponse:
    content_type: str = field()
    status_code: int = field()
    
