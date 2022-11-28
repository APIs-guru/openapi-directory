from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2GetLeaderboardsPathParams:
    destiny_membership_id: int = field(metadata={'path_param': { 'field_name': 'destinyMembershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetLeaderboardsQueryParams:
    maxtop: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxtop', 'style': 'form', 'explode': True }})
    modes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'modes', 'style': 'form', 'explode': True }})
    statid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'statid', 'style': 'form', 'explode': True }})
    

@dataclass
class Destiny2GetLeaderboardsRequest:
    path_params: Destiny2GetLeaderboardsPathParams = field()
    query_params: Destiny2GetLeaderboardsQueryParams = field()
    

@dataclass
class Destiny2GetLeaderboardsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
