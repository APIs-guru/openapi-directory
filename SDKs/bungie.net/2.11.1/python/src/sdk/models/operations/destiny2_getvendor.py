from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class Destiny2GetVendorPathParams:
    character_id: int = field(default=None, metadata={'path_param': { 'field_name': 'characterId', 'style': 'simple', 'explode': False }})
    destiny_membership_id: int = field(default=None, metadata={'path_param': { 'field_name': 'destinyMembershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    vendor_hash: int = field(default=None, metadata={'path_param': { 'field_name': 'vendorHash', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetVendorQueryParams:
    components: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'components', 'style': 'form', 'explode': False }})
    

@dataclass
class Destiny2GetVendorRequest:
    path_params: Destiny2GetVendorPathParams = field(default=None)
    query_params: Destiny2GetVendorQueryParams = field(default=None)
    

@dataclass
class Destiny2GetVendorResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
