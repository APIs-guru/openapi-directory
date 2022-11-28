from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2GetClanLeaderboardsPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetClanLeaderboardsQueryParams:
    maxtop: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxtop', 'style': 'form', 'explode': True }})
    modes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modes', 'style': 'form', 'explode': True }})
    statid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'statid', 'style': 'form', 'explode': True }})
    

@dataclass
class Destiny2GetClanLeaderboardsRequest:
    path_params: Destiny2GetClanLeaderboardsPathParams = field()
    query_params: Destiny2GetClanLeaderboardsQueryParams = field()
    

@dataclass
class Destiny2GetClanLeaderboardsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
