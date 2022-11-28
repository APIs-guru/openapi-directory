from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2GetUniqueWeaponHistoryPathParams:
    character_id: int = field(metadata={'path_param': { 'field_name': 'characterId', 'style': 'simple', 'explode': False }})
    destiny_membership_id: int = field(metadata={'path_param': { 'field_name': 'destinyMembershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetUniqueWeaponHistoryRequest:
    path_params: Destiny2GetUniqueWeaponHistoryPathParams = field()
    

@dataclass
class Destiny2GetUniqueWeaponHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
