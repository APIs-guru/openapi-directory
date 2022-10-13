from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetClickwrapsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetClickwrapsRequest:
    query_params: GetClickwrapsQueryParams = field(default=None)
    

@dataclass
class GetClickwrapsResponse:
    clickwrap_entities: Optional[List[shared.ClickwrapEntity]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
