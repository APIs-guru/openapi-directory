from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStatisticsItemPathParams:
    zone: str = field(default=None, metadata={'path_param': { 'field_name': 'zone', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStatisticsItemQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStatisticsItemRequest:
    path_params: GetStatisticsItemPathParams = field(default=None)
    query_params: GetStatisticsItemQueryParams = field(default=None)
    

@dataclass
class GetStatisticsItemResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    zone_stats: Optional[shared.ZoneStats] = field(default=None)
    
