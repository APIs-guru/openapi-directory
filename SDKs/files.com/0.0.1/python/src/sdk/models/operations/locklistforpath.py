from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class LockListForPathPathParams:
    path: str = field(default=None, metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    

@dataclass
class LockListForPathQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    include_children: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_children', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class LockListForPathRequest:
    path_params: LockListForPathPathParams = field(default=None)
    query_params: LockListForPathQueryParams = field(default=None)
    

@dataclass
class LockListForPathResponse:
    content_type: str = field(default=None)
    lock_entities: Optional[List[shared.LockEntity]] = field(default=None)
    status_code: int = field(default=None)
    
