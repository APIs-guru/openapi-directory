from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class Destiny2GetCollectibleNodeDetailsPathParams:
    character_id: int = field(metadata={'path_param': { 'field_name': 'characterId', 'style': 'simple', 'explode': False }})
    collectible_presentation_node_hash: int = field(metadata={'path_param': { 'field_name': 'collectiblePresentationNodeHash', 'style': 'simple', 'explode': False }})
    destiny_membership_id: int = field(metadata={'path_param': { 'field_name': 'destinyMembershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2GetCollectibleNodeDetailsQueryParams:
    components: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'components', 'style': 'form', 'explode': False }})
    

@dataclass
class Destiny2GetCollectibleNodeDetailsRequest:
    path_params: Destiny2GetCollectibleNodeDetailsPathParams = field()
    query_params: Destiny2GetCollectibleNodeDetailsQueryParams = field()
    

@dataclass
class Destiny2GetCollectibleNodeDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
