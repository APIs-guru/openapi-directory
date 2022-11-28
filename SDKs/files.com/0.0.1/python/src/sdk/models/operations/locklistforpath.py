from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LockListForPathPathParams:
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class LockListForPathQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    include_children: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_children', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class LockListForPathRequest:
    path_params: LockListForPathPathParams = field()
    query_params: LockListForPathQueryParams = field()
    

@dataclass
class LockListForPathResponse:
    content_type: str = field()
    status_code: int = field()
    lock_entities: Optional[List[shared.LockEntity]] = field(default=None)
    
