from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersUserIDCipherUsesPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserIDCipherUsesQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersUserIDCipherUsesRequest:
    path_params: GetUsersUserIDCipherUsesPathParams = field()
    query_params: GetUsersUserIDCipherUsesQueryParams = field()
    

@dataclass
class GetUsersUserIDCipherUsesResponse:
    content_type: str = field()
    status_code: int = field()
    user_cipher_use_entities: Optional[List[shared.UserCipherUseEntity]] = field(default=None)
    
