from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetNextDeparturesByCrsPathParams:
    crs: str = field(default=None, metadata={'path_param': { 'field_name': 'CRS', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNextDeparturesByCrsQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    filter_list: str = field(default=None, metadata={'query_param': { 'field_name': 'filterList', 'style': 'form', 'explode': True }})
    service_details: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'serviceDetails', 'style': 'form', 'explode': True }})
    time_offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeOffset', 'style': 'form', 'explode': True }})
    time_window: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeWindow', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNextDeparturesByCrsRequest:
    path_params: GetNextDeparturesByCrsPathParams = field(default=None)
    query_params: GetNextDeparturesByCrsQueryParams = field(default=None)
    

@dataclass
class GetNextDeparturesByCrsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
