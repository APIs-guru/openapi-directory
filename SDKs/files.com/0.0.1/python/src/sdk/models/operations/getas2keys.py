from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAs2KeysQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAs2KeysRequest:
    query_params: GetAs2KeysQueryParams = field(default=None)
    

@dataclass
class GetAs2KeysResponse:
    as2_key_entities: Optional[List[shared.As2KeyEntity]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
