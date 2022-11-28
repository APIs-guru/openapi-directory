from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class Destiny2GetCharacterPathParams:
    character_id: int = field(metadata={'path_param': { 'field_name': 'characterId', 'style': 'simple', 'explode': False }})
    destiny_membership_id: int = field(metadata={'path_param': { 'field_name': 'destinyMembershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetCharacterQueryParams:
    components: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'components', 'style': 'form', 'explode': False }})
    

@dataclass
class Destiny2GetCharacterRequest:
    path_params: Destiny2GetCharacterPathParams = field()
    query_params: Destiny2GetCharacterQueryParams = field()
    

@dataclass
class Destiny2GetCharacterResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
