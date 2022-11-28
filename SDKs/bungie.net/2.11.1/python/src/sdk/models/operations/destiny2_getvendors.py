from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class Destiny2GetVendorsPathParams:
    character_id: int = field(metadata={'path_param': { 'field_name': 'characterId', 'style': 'simple', 'explode': False }})
    destiny_membership_id: int = field(metadata={'path_param': { 'field_name': 'destinyMembershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetVendorsQueryParams:
    components: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'components', 'style': 'form', 'explode': False }})
    filter: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class Destiny2GetVendorsRequest:
    path_params: Destiny2GetVendorsPathParams = field()
    query_params: Destiny2GetVendorsQueryParams = field()
    

@dataclass
class Destiny2GetVendorsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
