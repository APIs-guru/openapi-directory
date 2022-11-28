from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUserAs2KeysQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserAs2KeysRequest:
    query_params: GetUserAs2KeysQueryParams = field()
    

@dataclass
class GetUserAs2KeysResponse:
    content_type: str = field()
    status_code: int = field()
    as2_key_entities: Optional[List[shared.As2KeyEntity]] = field(default=None)
    
