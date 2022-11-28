from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetConnectorPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConnectorQueryParams:
    include_evse: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_evse', 'style': 'form', 'explode': True }})
    include_organization: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_organization', 'style': 'form', 'explode': True }})
    include_rate: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_rate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetConnectorRequest:
    path_params: GetConnectorPathParams = field()
    query_params: GetConnectorQueryParams = field()
    

@dataclass
class GetConnectorResponse:
    content_type: str = field()
    status_code: int = field()
    
