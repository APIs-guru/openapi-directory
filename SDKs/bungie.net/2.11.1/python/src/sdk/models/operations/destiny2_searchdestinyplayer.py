from dataclasses import dataclass, field
from typing import Optional


@dataclass
class Destiny2SearchDestinyPlayerPathParams:
    display_name: str = field(default=None, metadata={'path_param': { 'field_name': 'displayName', 'style': 'simple', 'explode': False }})
    membership_type: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class Destiny2SearchDestinyPlayerQueryParams:
    return_original_profile: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'returnOriginalProfile', 'style': 'form', 'explode': True }})
    

@dataclass
class Destiny2SearchDestinyPlayerRequest:
    path_params: Destiny2SearchDestinyPlayerPathParams = field(default=None)
    query_params: Destiny2SearchDestinyPlayerQueryParams = field(default=None)
    

@dataclass
class Destiny2SearchDestinyPlayerResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
