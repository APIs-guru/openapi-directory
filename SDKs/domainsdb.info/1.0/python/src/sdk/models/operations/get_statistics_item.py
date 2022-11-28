from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetStatisticsItemPathParams:
    zone: str = field(metadata={'path_param': { 'field_name': 'zone', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetStatisticsItemQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStatisticsItemRequest:
    path_params: GetStatisticsItemPathParams = field()
    query_params: GetStatisticsItemQueryParams = field()
    

@dataclass
class GetStatisticsItemResponse:
    content_type: str = field()
    status_code: int = field()
    zone_stats: Optional[shared.ZoneStats] = field(default=None)
    
