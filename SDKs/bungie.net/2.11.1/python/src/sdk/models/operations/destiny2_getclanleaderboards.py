from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2GetClanLeaderboardsPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetClanLeaderboardsQueryParams:
    maxtop: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxtop', 'style': 'form', 'explode': True }})
    modes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modes', 'style': 'form', 'explode': True }})
    statid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'statid', 'style': 'form', 'explode': True }})
    

@dataclass
class Destiny2GetClanLeaderboardsRequest:
    path_params: Destiny2GetClanLeaderboardsPathParams = field(default=None)
    query_params: Destiny2GetClanLeaderboardsQueryParams = field(default=None)
    

@dataclass
class Destiny2GetClanLeaderboardsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
