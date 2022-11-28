from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class Destiny2GetProfilePathParams:
    destiny_membership_id: int = field(metadata={'path_param': { 'field_name': 'destinyMembershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetProfileQueryParams:
    components: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'components', 'style': 'form', 'explode': False }})
    

@dataclass
class Destiny2GetProfileRequest:
    path_params: Destiny2GetProfilePathParams = field()
    query_params: Destiny2GetProfileQueryParams = field()
    

@dataclass
class Destiny2GetProfileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
