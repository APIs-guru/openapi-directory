from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersUserIDCipherUsesPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserIDCipherUsesQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersUserIDCipherUsesRequest:
    path_params: GetUsersUserIDCipherUsesPathParams = field(default=None)
    query_params: GetUsersUserIDCipherUsesQueryParams = field(default=None)
    

@dataclass
class GetUsersUserIDCipherUsesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_cipher_use_entities: Optional[List[shared.UserCipherUseEntity]] = field(default=None)
    
