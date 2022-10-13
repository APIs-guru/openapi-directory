from dataclasses import dataclass, field



@dataclass
class Destiny2GetUniqueWeaponHistoryPathParams:
    character_id: int = field(default=None, metadata={'path_param': { 'field_name': 'characterId', 'style': 'simple', 'explode': False }})
    destiny_membership_id: int = field(default=None, metadata={'path_param': { 'field_name': 'destinyMembershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetUniqueWeaponHistoryRequest:
    path_params: Destiny2GetUniqueWeaponHistoryPathParams = field(default=None)
    

@dataclass
class Destiny2GetUniqueWeaponHistoryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
