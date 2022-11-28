from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersUserIDPublicKeysPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserIDPublicKeysQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersUserIDPublicKeysRequest:
    path_params: GetUsersUserIDPublicKeysPathParams = field()
    query_params: GetUsersUserIDPublicKeysQueryParams = field()
    

@dataclass
class GetUsersUserIDPublicKeysResponse:
    content_type: str = field()
    status_code: int = field()
    public_key_entities: Optional[List[shared.PublicKeyEntity]] = field(default=None)
    
