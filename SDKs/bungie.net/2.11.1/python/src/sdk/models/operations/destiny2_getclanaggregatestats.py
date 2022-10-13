from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2GetClanAggregateStatsPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetClanAggregateStatsQueryParams:
    modes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modes', 'style': 'form', 'explode': True }})
    

@dataclass
class Destiny2GetClanAggregateStatsRequest:
    path_params: Destiny2GetClanAggregateStatsPathParams = field(default=None)
    query_params: Destiny2GetClanAggregateStatsQueryParams = field(default=None)
    

@dataclass
class Destiny2GetClanAggregateStatsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
