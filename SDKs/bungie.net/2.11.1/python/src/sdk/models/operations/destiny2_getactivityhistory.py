from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2GetActivityHistoryPathParams:
    character_id: int = field(default=None, metadata={'path_param': { 'field_name': 'characterId', 'style': 'simple', 'explode': False }})
    destiny_membership_id: int = field(default=None, metadata={'path_param': { 'field_name': 'destinyMembershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetActivityHistoryQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    mode: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'mode', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class Destiny2GetActivityHistoryRequest:
    path_params: Destiny2GetActivityHistoryPathParams = field(default=None)
    query_params: Destiny2GetActivityHistoryQueryParams = field(default=None)
    

@dataclass
class Destiny2GetActivityHistoryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
