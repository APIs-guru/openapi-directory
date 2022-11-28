from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2GetActivityHistoryPathParams:
    character_id: int = field(metadata={'path_param': { 'field_name': 'characterId', 'style': 'simple', 'explode': False }})
    destiny_membership_id: int = field(metadata={'path_param': { 'field_name': 'destinyMembershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetActivityHistoryQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    mode: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'mode', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class Destiny2GetActivityHistoryRequest:
    path_params: Destiny2GetActivityHistoryPathParams = field()
    query_params: Destiny2GetActivityHistoryQueryParams = field()
    

@dataclass
class Destiny2GetActivityHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
