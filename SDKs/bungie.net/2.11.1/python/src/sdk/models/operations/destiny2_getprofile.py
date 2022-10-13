from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class Destiny2GetProfilePathParams:
    destiny_membership_id: int = field(default=None, metadata={'path_param': { 'field_name': 'destinyMembershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetProfileQueryParams:
    components: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'components', 'style': 'form', 'explode': False }})
    

@dataclass
class Destiny2GetProfileRequest:
    path_params: Destiny2GetProfilePathParams = field(default=None)
    query_params: Destiny2GetProfileQueryParams = field(default=None)
    

@dataclass
class Destiny2GetProfileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
