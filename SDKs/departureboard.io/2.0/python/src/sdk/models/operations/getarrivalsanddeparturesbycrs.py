from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetArrivalsAndDeparturesByCrsPathParams:
    crs: str = field(default=None, metadata={'path_param': { 'field_name': 'CRS', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetArrivalsAndDeparturesByCrsQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'apiKey', 'style': 'form', 'explode': True }})
    filter_station: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterStation', 'style': 'form', 'explode': True }})
    filter_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filterType', 'style': 'form', 'explode': True }})
    num_services: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'numServices', 'style': 'form', 'explode': True }})
    service_details: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'serviceDetails', 'style': 'form', 'explode': True }})
    time_offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeOffset', 'style': 'form', 'explode': True }})
    time_window: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'timeWindow', 'style': 'form', 'explode': True }})
    

@dataclass
class GetArrivalsAndDeparturesByCrsRequest:
    path_params: GetArrivalsAndDeparturesByCrsPathParams = field(default=None)
    query_params: GetArrivalsAndDeparturesByCrsQueryParams = field(default=None)
    

@dataclass
class GetArrivalsAndDeparturesByCrsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
