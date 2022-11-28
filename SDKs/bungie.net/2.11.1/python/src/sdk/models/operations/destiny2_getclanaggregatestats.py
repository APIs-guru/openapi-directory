from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2GetClanAggregateStatsPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetClanAggregateStatsQueryParams:
    modes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modes', 'style': 'form', 'explode': True }})
    

@dataclass
class Destiny2GetClanAggregateStatsRequest:
    path_params: Destiny2GetClanAggregateStatsPathParams = field()
    query_params: Destiny2GetClanAggregateStatsQueryParams = field()
    

@dataclass
class Destiny2GetClanAggregateStatsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
