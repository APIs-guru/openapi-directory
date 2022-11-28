from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2GetDestinyAggregateActivityStatsPathParams:
    character_id: int = field(metadata={'path_param': { 'field_name': 'characterId', 'style': 'simple', 'explode': False }})
    destiny_membership_id: int = field(metadata={'path_param': { 'field_name': 'destinyMembershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetDestinyAggregateActivityStatsRequest:
    path_params: Destiny2GetDestinyAggregateActivityStatsPathParams = field()
    

@dataclass
class Destiny2GetDestinyAggregateActivityStatsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
