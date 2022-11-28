from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2GetLinkedProfilesPathParams:
    membership_id: int = field(metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetLinkedProfilesQueryParams:
    get_all_memberships: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getAllMemberships', 'style': 'form', 'explode': True }})
    

@dataclass
class Destiny2GetLinkedProfilesRequest:
    path_params: Destiny2GetLinkedProfilesPathParams = field()
    query_params: Destiny2GetLinkedProfilesQueryParams = field()
    

@dataclass
class Destiny2GetLinkedProfilesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
