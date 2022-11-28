from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetStatisticsCollectionQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStatisticsCollectionRequest:
    query_params: GetStatisticsCollectionQueryParams = field()
    

@dataclass
class GetStatisticsCollectionResponse:
    content_type: str = field()
    status_code: int = field()
    zone_stats: Optional[List[shared.ZoneStats]] = field(default=None)
    
