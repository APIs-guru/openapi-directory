from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUserCipherUsesQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserCipherUsesRequest:
    query_params: GetUserCipherUsesQueryParams = field()
    

@dataclass
class GetUserCipherUsesResponse:
    content_type: str = field()
    status_code: int = field()
    user_cipher_use_entities: Optional[List[shared.UserCipherUseEntity]] = field(default=None)
    
