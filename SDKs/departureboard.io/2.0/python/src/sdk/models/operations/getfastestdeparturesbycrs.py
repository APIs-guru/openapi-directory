from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetFastestDeparturesByCrsPathParams:
    crs: str = field(default=None, metadata={'path_param': { 'field_name': 'CRS', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetFastestDeparturesByCrsQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    filter_list: str = field(default=None, metadata={'query_param': { 'field_name': 'filterList', 'style': 'form', 'explode': True }})
    service_details: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'serviceDetails', 'style': 'form', 'explode': True }})
    time_offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeOffset', 'style': 'form', 'explode': True }})
    time_window: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeWindow', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFastestDeparturesByCrsRequest:
    path_params: GetFastestDeparturesByCrsPathParams = field(default=None)
    query_params: GetFastestDeparturesByCrsQueryParams = field(default=None)
    

@dataclass
class GetFastestDeparturesByCrsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
