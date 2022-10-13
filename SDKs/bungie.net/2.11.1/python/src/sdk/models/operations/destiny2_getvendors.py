from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class Destiny2GetVendorsPathParams:
    character_id: int = field(default=None, metadata={'path_param': { 'field_name': 'characterId', 'style': 'simple', 'explode': False }})
    destiny_membership_id: int = field(default=None, metadata={'path_param': { 'field_name': 'destinyMembershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetVendorsQueryParams:
    components: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'components', 'style': 'form', 'explode': False }})
    filter: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class Destiny2GetVendorsRequest:
    path_params: Destiny2GetVendorsPathParams = field(default=None)
    query_params: Destiny2GetVendorsQueryParams = field(default=None)
    

@dataclass
class Destiny2GetVendorsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
